
-------

# ##sec Open Issues

<!-- Working draft only. This section is to be resolved and removed
     before the document advances to Committee Specification. -->

This section is non-normative. It records the decisions that the drafting
of this document forced, but that the Technical Committee has not yet
taken. Each item states the position currently taken in the draft, so
that the draft is internally consistent, together with the alternatives
considered.

## ##subsec Cross-Specification Dependencies

1. **Context URLs in request payloads.** *Merged with former issue 14; to be
   put to the TC as a single proposal.* Two request payloads need a context
   URL that [OData-Protocol](#ODataProtocol) does not currently provide.

   *(a) Request bodies.* [#OData-Protocol#ContextURL] states that request
   payloads generally do not require context URLs, and defines a template
   for a request body only for the delta payload used to update a collection
   (`#$delta`). Since D‑29 a compact request body MUST carry one, both to
   convey the positional property list and, for a `PATCH`, to convey which
   properties are affected. Without a Part 1 change, compact request bodies
   cannot be specified at all --- this is a blocker for chapter 8, not a
   refinement.
   *Position taken:* the draft uses response context URL templates in
   request bodies unchanged.
   *Alternative:* define request-specific templates in Part 1, or define
   separate control information for the positional property list, which
   would contradict design principle 3 in [section ##DesignPrinciples].

   *(b) Action and function parameter payloads.* A parameter payload has no
   context URL and no template for one, so [section
   ##ActionandFunctionParameters] currently forbids the positional
   representation there (D‑30). This is a real loss: an action taking a large
   collection of entities or complex values is exactly what this format
   exists to compact. That no context URL has been needed for a parameter
   payload until now --- the case arises only in requests --- is no reason not
   to define one.
   *Candidate directions, none yet assessed:* a template addressing the
   operation and carrying a select-list per parameter; a select-list carried
   per parameter within the parameter object; or deriving the list from the
   parameter's declared type together with an explicit metadata document
   version.

2. **Losslessness.** The stated goal is that every construct of
   [OData-JSON](#ODataJSON) has a compact counterpart, and that every
   [OData-JSON](#ODataJSON) payload is a valid compact payload. The second
   half holds by the [superset principle](#supersetprinciple). The first
   half has not been verified exhaustively against
   [OData-JSON](#ODataJSON); the constructs currently *without* a
   positional counterpart are entity references, links in delta payloads,
   the service document, errors and the batch document, each for the
   reason given in the respective section. The Technical Committee should
   decide whether that list is acceptable, and whether
   [OData-JSON](#ODataJSON) should change where it is not.

3. **Stability of property order.** *Resolved.* The draft no longer derives
   the positional property list from the CSDL document at all: [section
   ##DeterminingthePositionalPropertyList] requires the context URL of every
   compact payload to enumerate the select-list, forbids the shortcuts `*`
   and `{namespace}.*`, and disapplies the implicit selection of all
   structural properties. The dependency on declaration order, and with it
   the need for versioned metadata document URLs, is gone.

   The decisive argument was not that declaration order is unstable but that
   it is *unknowable to the reader*: a service always knows which version of
   the CSDL document it used, whereas a client composing a request payload
   does not, and cannot determine it from the payload. Enumerating the
   select-list places the information with the party that reliably has it.

   Note that this constrains the context URL, not the request: `$select=*`,
   `$expand=*` and an absent `$select` all remain valid, and the service
   enumerates what it actually returned.

## ##subsec Naming and Encoding Decisions

4. **The value name.** *Decided: `$`.* The name of a wrapper object's
   value is `$`. `_`, used in earlier drafts, is a valid simple identifier
   ([OData-CSDL](#ODataCSDL)) and therefore collides: a type declaring, or
   an open type carrying, a property named `_` could not be told apart from
   a wrapper object. A simple identifier is at least one character long and
   begins with an underscore or a Unicode letter, so `$`, `@` and the empty
   string are the collision-free candidates; the TC chose `$`.

   The reasons, recorded because the choice determines how a receiver
   recognizes a wrapper object at all:

   - [OData-CSDL](#ODataCSDL) JSON already solves this exact problem the
     same way --- "to avoid name collisions, all fixed member names are
     prefixed with a dollar (`$`) sign" --- and it does so in objects that
     mix all three kinds of member the compact format now needs in one
     place: `$`-prefixed fixed names, `@`-prefixed annotations, and
     model-defined names. Adopting `$` gives the two formats the same
     three-way split.
   - `@` was considered and rejected. Because [OData-JSON](#ODataJSON)
     parsers conventionally separate annotations from properties by testing
     whether a name begins with `@`, a value named `@` would fall into the
     annotation branch of existing code, silently.
   - The empty string was considered and rejected. It is legal JSON and
     collision-free, but `""` and `" "` are indistinguishable in fonts,
     diffs and pasted payloads, so a stray space yields valid JSON with the
     wrong meaning and no diagnostic; it cannot be named in prose or found
     by eye in an example; and it is the least-tested path in JSON tooling.
     Its only advantage is one byte per wrapper object, and wrapper objects
     occur only where annotations apply, so compactness does not decide the
     question.

   Separately, `value` is recognized as the name of the wrapper object's
   value only in those message bodies in which [OData-JSON](#ODataJSON)
   itself uses it --- a single primitive value and the collections
   enumerated there --- and not where [OData-JSON](#ODataJSON) represents
   the message body as the instance itself. An earlier draft recognized
   `value` at every root; that was withdrawn on review because it both
   extended [OData-JSON](#ODataJSON) and made a single-entity message body
   ambiguous. See [section ##TheWrapperObject].

5. **"Not applicable" at a position.** *Resolved, narrowed in scope.* The
   empty JSON object `{}` denotes "no value" at the position of a selected
   dynamic property that an instance does not have ([section
   ##OpenTypesandDynamicProperties]). It is no longer used for properties
   of derived types, which under issue 6 simply do not occupy a position on
   instances of other types.
   *Accepted consequence:* now that a wrapper object is recognized by the
   presence of `$`, `{}` is not a wrapper by that test. The TC accepted
   that `{}` conveys "undefined" by convention rather than as a consequence
   of the definition, and [section ##TheWrapperObject] says so.
   *Alternative not taken:* `null`, which is shorter by two bytes but
   conflates "no such property" with "property is null" and so is not
   lossless.

6. **Wrapper objects carrying named properties.** *Resolved and drafted.* A
   wrapper object may carry, after the value, properties of the instance
   that are not in its positional property list. An instance of an open
   type therefore keeps its positional representation and conveys its
   unselected dynamic properties by name, instead of falling back wholesale
   to the representation defined by [OData-JSON](#ODataJSON). Only the
   instances that have such properties pay for them.

   The recognition rule in [section ##TheWrapperObject] is consequently
   two-part: an object containing `$` is a wrapper; an object all of whose
   members are annotations is a wrapper carrying no value; anything else is
   the [OData-JSON](#ODataJSON) representation. This is what makes the
   choice of `$` load-bearing rather than cosmetic.

   *Still open:* a property that occupies a position MUST NOT also be
   carried by name, but the draft gives a receiver no obligation to detect
   a producer that breaks this. Whether that should be an error, and which
   wins if it happens, is not settled.

7. **The `compact` format parameter.** The draft uses `compact=true`.
   Should the parameter instead take a value naming the compaction
   strategy, for example `compact=rows`, to leave room for a future
   column-oriented or dictionary-encoded variant without a new media
   type?

## ##subsec Constructs Not Yet Specified

8. **Recursive expansion.** [OData-Protocol](#ODataProtocol) represents an
   expansion with `$levels` using the `+` infix, as in
   `DirectReports+(FirstName,LastName)`. [Section
   ##GroupingofSelectItems] folds such an item into the group of its
   navigation property but does not say how the nested select-list applies
   at the second and subsequent levels, where it may differ from the
   first.

9. **Operations in the select-list.** A select-list may contain actions
   and functions, and the shortcut `{namespace}.*`. Such an item occupies
   a position under the rules of [section
   ##DeterminingthePositionalPropertyList], and the value at that position
   would be the operation advertisement, or the empty wrapper object if
   the operation is not available. This is a consequence of the rules
   rather than a decision, and has not been examined.

10. **Action and function parameters.** [Section
    ##ActionandFunctionParameters] keeps the parameter object as defined
    in [OData-JSON](#ODataJSON) and allows only the parameter values to be
    positional. Parameters have a declared order in
    [OData-CSDL](#ODataCSDL), so the parameter object could itself be a
    positional array. The saving is small, and the interaction with
    optional parameters and with parameter aliases has not been examined.

11. **Interaction with `$apply`.** Aggregated results introduce dynamic
    properties that appear in the context URL, which suggests the rules of
    this document apply unchanged, but this has not been verified against
    [OData-Aggregation](#ODataAggregation). Transformations that produce a heterogeneous
    result, such as `concat`, need particular attention.

12. **Consistency within a collection.** The draft allows a sender to mix
    positional and object representations freely within one collection.
    A receiver optimized for the positional case may prefer a guarantee
    that a collection is homogeneous, at the cost of forcing an entire
    collection into the object representation whenever a single instance
    requires it.

13. **The count segment in a select-list.** [OData-URL](#ODataURL) allows
    `$select=ID,Addresses/$count` and `$expand=Orders/$count`, but neither
    [OData-Protocol](#ODataProtocol) nor [OData-JSON](#ODataJSON) states
    explicitly how the count segment appears in the context URL. [Example
    ##countonly] assumes it is retained as written, which makes the
    grouping rule of [section ##GroupingofSelectItems] produce the
    intended single position. If it is not retained, the positional
    property list cannot distinguish "count only" from "the collection
    itself" and this document needs a rule of its own.

14. **Positional parameter values for actions and functions.** *Merged into
    issue 1(b).*

15. **Control information in the positional representation.** Selected
    instance annotations already occupy positions; the proposal is to allow
    control information --- `@id`, `@etag`, `@type` --- to do so as well. This
    would repair the inversion recorded under D‑20, whereby `metadata=full`
    currently forces every instance into a wrapper object and so defeats the
    format.

    *The select-list here is written by the service, not by the client.* The
    context URL describes what the payload contains; `$select` is what the
    client asked for. D‑29 already relies on that distinction --- a service
    resolves `$select=*`, or no `$select` at all, and then enumerates what it
    actually returned. Whether `@id` and `@etag` appear is driven by the
    protocol, the model and the service's own choice, exactly as it is for
    the format defined in [OData-JSON](#ODataJSON) today; a client is not
    surprised to receive them. Extending `$select` to admit them would
    therefore be the wrong move. Only the context URL need admit them.

    That materially narrows the cross-specification ask. An earlier reading
    of this issue held that both Part 1 and Part 2 would have to change, and
    that the change was larger than issue 1. On the reading above, `$select`
    is untouched and only the context URL grammar is affected.

    *Settled in principle:*

    - If type information is conveyed positionally, the `type` control
      information MUST occupy the **first** position (D‑31). It is the only
      thing that must be read before the positional property list is known,
      so it is the only one whose position must be fixed.
    - The service chooses, per payload, whether to convey a given piece of
      control information in the wrapper object or positionally. Neither is
      mandated.
    - An instance lacking a given piece of control information uses `{}` at
      that position, exactly as for a selected dynamic property (D‑27).

    *Still to settle:*

    - **Which control information is eligible.** `count` and `nextLink` apply
      to a *collection*, not to an instance, so they have no per-instance
      position and are out of scope. The eligible set is the instance-scoped
      control information: `id`, `etag`, `type`, `editLink`, `readLink` and
      the media ones. An earlier draft of this issue wrongly cited `count`.
    - **Whether the ABNF can separate the two select-lists.** The context URL
      grammar is defined by the [OData-ABNF](#ODataABNF) rule
      [context]{.abnf}. If its select-list shares the [selectItem]{.abnf}
      rule with `$select`, then admitting control information in one and not
      the other needs a distinct rule rather than a widened shared one.
    - **No duplication.** If the select-list places `type` at position 0,
      a wrapper object around that instance MUST NOT also carry `type`.
    - **The base-type cost.** If `type` occupies position 0 then *every*
      instance carries something there, including instances of the declared
      type, which would use `{}`. That trades a small fixed cost on every
      instance against removing the wrapper object from every derived
      instance. Which wins depends on how derived-heavy the collection is,
      so the choice belongs to the service --- but the draft should say so,
      rather than leaving producers to guess.

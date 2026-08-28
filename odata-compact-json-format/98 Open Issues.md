
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

1. **Context URLs in request bodies.**
   [#OData-Protocol#ContextURL] states that request payloads generally do
   not require context URLs, and defines a context URL template for a
   request body only for the delta payload used to update a collection
   (`#$delta`). This document relies on the `context` control information
   in request bodies to convey the positional property list, and in
   particular to convey the set of properties affected by a `PATCH`. That
   use is not currently sanctioned by [OData-Protocol](#ODataProtocol) and
   would require a corresponding change to Part 1.
   *Position taken:* the draft uses response context URL templates in
   request bodies unchanged.
   *Alternative:* define request-specific templates in Part 1, or define a
   separate control information for the positional property list, which
   would contradict design principle 3 in [section ##DesignPrinciples].

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

3. **Stability of property order.** The positional property list of an
   implicitly selected type depends on the order in which properties are
   declared in the CSDL document. [OData-CSDL](#ODataCSDL) does not
   currently make declaration order significant, so a service may reorder
   properties in its metadata without considering it a breaking change.
   *Position taken:* [section ##DeterminingthePositionalPropertyList]
   requires the order to be stable for a given metadata document URL and
   recommends versioned metadata URLs.
   *Alternatives:* require an explicit `$select` -- and therefore an
   explicit select-list in the context URL -- for all compact payloads,
   removing the dependency on declaration order entirely; or introduce a
   Core vocabulary term that fixes the ordinal of each property.

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

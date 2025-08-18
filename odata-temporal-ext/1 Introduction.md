
-------

# ##sec Introduction

This specification adds the notion of time-dependency to the Open Data
Protocol (OData) without changing any of the base principles of OData.
It defines semantics and a representation for temporal data, especially:

-   Semantics and operations for querying and modifying temporal data,
-   Vocabulary terms to annotate which data depends on time, and how.

## ##subsec Changes from Earlier Versions

<!-- TODO -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->

## ##subsec Glossary

### ##subsubsec Definitions of Terms

#### ##subsubsubsec Application Time

Application time is used to describe data that is known to change over
time, for example the budget of a department, or which department an
employee works for. Application time may capture planned changes in the
future, for example transferring an employee to a new department next
month or capturing next year's budget for a department. Both future and
past data can be changed.

#### ##subsubsubsec System Time

System time is used to record when data became known by the "system of
record". System time does not extend into the future, and record entries
are only added and are never changed.

System time is never manipulated directly, and typically not visible in
APIs, except for "last changed at" time stamps, and the corresponding
properties are read-only.

As system time is typically not visible in APIs, we do not consider this
in the remainder of this document.

#### ##subsubsubsec Temporal Object

A temporal object is a set of data whose change over time is tracked by
the service as a sequence of [time slices](#TimeSlice).

#### ##subsubsubsec Time Slice

A piece of temporal data with attached time period, documenting that the
data did not change during this time period.

Time slices for the same [temporal object](#TemporalObject)
are non-overlapping, so for any given point in time there is at most one
slice whose time period contains that point in time.

Time slices for a temporal object need not cover the complete timeline.
There can be points in time for which no time slice exists, indicating
that the object's values are not known to the service.

##### ##subsubsubsubsec Closed-Open Semantics

Time slices typically use closed-open semantics, following [SQL:2011](#_SQL).
This means the start is part of the period, the end is not part of the
period, and for directly adjacent time slices the end of the earlier
time slice is identical to the start of the next time slice. The period
start must be less than the period end.

##### ##subsubsubsubsec Closed-Closed Semantics

Some software systems predating the availability of temporal databases
and with data type *date* for the application-time period start and end
use closed-closed semantics. Temporal services on top of these systems
can either convert their period end boundaries on-the-fly by adding one
day on the way out and subtracting one day on the way in, or
alternatively express the used time slice semantics via
[annotations](#VocabularyforTemporalData).

#### ##subsubsubsec Snapshot Entity Set

An entity in a snapshot entity set represents a [temporal object](#TemporalObject)
at a specified point in time. When the entity is addressed via a
resource path (directly or via related resources), the point in time
must be specified, see [section ##PropagationofTemporalQueryOptions]
for details on how to determine this point in time.

The entity's id and its canonical URL are independent of this point in
time. Hence, they are sufficient to _reference_ the
entity but not _address_ it. In other words: the entity
can be considered a function that maps each point in time to an instance
of the entity type. That function can be _referenced_
but only its values can be _addressed_.

Without a point in time, statements about individual structural or
navigation properties of the entity or even about its existence cannot
be made, and [change tracking](#RequestingChangestoTemporalData)
is not possible.

Snapshot entity sets MUST be [annotated](#VocabularyforTemporalData)
with a `Timeline` of type `TimelineSnapshot`.

#### ##subsubsubsec Timeline Entity Set

An entity in a timeline entity set represents one [time slice](#TimeSlice)
of a [temporal object](#TemporalObject),
and all time slices of that temporal object are part of the entity set.

The entity's id and its canonical URL depend on the period of
application time of the corresponding time slice.
_Referencing_ and _addressing_ the
entity are equivalent concepts, unlike in the snapshot case.

The response to a time-range request need not reflect the time-slice cut
of the underlying data model.

Services MAY condense/defragment adjacent time slices that do not differ
in represented properties other than the period boundaries. This reduces
the payload size, and it also avoids potential information leakage if
the service only publishes a projection of the underlying data model.

Services MAY also split time slices to align their boundaries with
nested expanded time slices to represent a "coarsest common slicing"
across an expand tree.

Timeline entity sets MUST be [annotated](#VocabularyforTemporalData)
with a `Timeline` of type `TimelineVisible`.

### ##subsubsec Document Conventions

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only.

All other text is normative unless otherwise labeled.

<!--
Here is a customized command line which will generate HTML from the markdown file (named `$$$filename$$$.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs+smart
       -t html
       -o $$$filename$$$.html
       -c styles/markdown-styles-v1.7.3b.css
       -c styles/odata.css
       -s
       --mathjax
       --eol=lf
       --wrap=none
       --metadata pagetitle="$$$pagetitle$$$"
       $$$filename$$$.md
```

This uses pandoc $$$pandoc-version$$$ from https://github.com/jgm/pandoc/releases/tag/$$$pandoc-version$$$.
-->

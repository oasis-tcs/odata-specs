
-------

# ##sec Overview

When keeping track of time, the most important questions are:
- When did or will something happen?
- When did we learn that it happened?

This leads to two "directions" or "dimensions" of time (measured as a
date or date-plus-time value):
- [Application time](#ApplicationTime), also called actual time,
  business time, effective time, or valid time, and
- [System time](#SystemTime), also called recording time, audit time,
  or transaction time.

Keeping track of time is typically done by storing data together with
the time period for which that data is deemed valid or effective, using
separate periods for application time and system time, and the time
periods are part of the logical key for "records". See
**[[SQL:2011]](#SQL)** or **[[Kulkarni]](#Kulkarni)**
on how this is done in the SQL standard.

A consumer's perspective on this data can be different: even if time is
tracked internally, the period of time may or may not be visible in a
consumer's perspective, and even if visible the related properties are
often not considered part of an entity's identity. For example, an
employee is still the same person even after switching to another
department.

The goals of this extension are:
- Keep the API models as simple as possible by allowing to hide time-dependency,
- Provide easy means for [point-in-time queries](#QueryOptionat)
even if time-dependency is hidden,
- Provide easy means for [time-range queries](#QueryOptionsfromtoandtoInclusive)
if time-dependency is visible, and
- Provide easy means for modifying time-dependent data.

## ##subsec Example Model

Assume a simple scenario: employees will work in different roles and in
different departments during their career, and sometimes they even
change their name. At each point in time the employee has exactly one
name, one job title, and is assigned to one department.

Employees are assigned an immutable ID when first entering the company,
and all employee-related data will be recorded with an application-time
period attached. This allows entering planned changes ahead of time,
using a future application-time start date: if an employee will get a
different job title or switch to a different department, this data can
already be entered into the system and stored as a new record.

In the sections below we will discuss two different API models that can
be backed by the same storage model:

::: example
Example ##ex_api1: model for `api-1` with snapshot entity sets (hidden
application time), key properties marked with {id}
:::

$$$include images/api-1.drawio.svg$$$

and

::: example
Example ##ex_api2: model for `api-2` with timeline entity sets (visible
application time), key properties marked with {id}
:::

$$$include images/api-2.drawio.svg$$$

## ##subsec Example Data

Both API models in the previous section are views on the same underlying
data. A possible storage model for this data is:

::: example
Example ##ex: simple storage model: object key in dark green, temporal
sub-key in light green, foreign keys in orange, non-key fields in blue
:::

$$$include images/db.drawio.svg$$$

The period start date is used as the temporal sub-key for identifying
time slices together with the key of the temporal object.

Note: alternatively, the period end date could have been used as
temporal sub-key, or the primary key of the time slice tables could have
been an artificial key (sequence number, UUID, ...) with both the
temporal object key and the period boundaries as non-key fields.

The following example data will be used to further illustrate the
capabilities introduced by this extension. It assumes that the example
services only support four-digit years.

::: example
Example ##ex: example data: object key in dark green, temporal sub-key in
light green, foreign keys in orange, non-key fields in blue

:::: {.example-data style=width:600px;height:440px}
<svg viewBox="0 0 600 700">
  <defs>
    <marker id="begin" viewBox="0 0 10 10" refX="0" refY="5" orient="auto" markerWidth="5" markerHeight="5">
      <path d="M10,0 L0,5 L10,10 z" />
    </marker>
    <marker id="end" viewBox="0 0 10 10" refX="10" refY="5" orient="auto" markerWidth="5" markerHeight="5">
      <path d="M0,0 L10,5 L0,10 z" />
    </marker>
  </defs>
  <path d="M20,190 l0,40 l320,0 l0,40" marker-start="url(#begin)" marker-end="url(#end)" />
</svg>

::::: {.temp-2}
**Departments**

ID     | From       | To         | Name              | Budget
-------|------------|------------|-------------------|--------
D08    | 2010-01-01 | 2012-01-01 | Support           | 1000
D08    | 2012-01-01 | 2012-06-01 | Support           | 1250
D08    | 2012-06-01 | 2014-01-01 | 1st Level Support | 1250
D08    | 2014-01-01 | max        | 1st Level Support | 1400
D15    | 2010-01-01 | 2011-01-01 | Services          | 1100
D15    | 2011-01-01 | max        | Services          | 1170
:::::

::::: {.temp-2 .nav-6 style=top:240px}
**Employees**

ID     | From       | To         | Name     | Jobtitle | Department.ID
-------|------------|------------|----------|----------|---------------
E314   | 2011-01-01 | 2013-10-01 | McDevitt | Junior   | D08
E314   | 2013-10-01 | 2014-01-01 | McDevitt | Senior   | D08
E314   | 2014-01-01 | max        | McDevitt | Senior   | D15
E401   | 2009-11-01 | 2012-03-01 | Norman   | Expert   | D15
E401   | 2012-03-01 | max        | Gibson   | Expert   | D15
:::::

::::
:::

## ##subsec Example Use Cases

A client might wish to query the example APIs in several ways:

- Snapshot API
  1. Retrieve a current employee, together with the employee's current
department.
  2. Retrieve an employee as of a particular point in time, including the
employee's department as of that same point in time.
- Timeline API
  1. Retrieve employees that worked for the "Services" department in 2010.
  2. Retrieve all time slices of an employee.
  3. Retrieve all time slices of an employee for a given application-time
     period, including all time slices of the related departments within the
     application-time period of each employee time slice.
  4. Change a department's budget in the past, present, or future.
  5. Change an employee's association to a department in the past, present, or future.

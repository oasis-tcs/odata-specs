
-------

# ##sec Service Document

The service document is represented exactly as defined in
[OData-JSON](#ODataJSON).

The entries of a service document have no positional property list: they
are not instances of a type declared in the model, their members are
fixed by [OData-JSON](#ODataJSON) rather than by the model, and a service
document is small and requested once. A compact representation would
carry no benefit.

A service MUST accept a request for the service document with the
`compact=true` format parameter and MUST respond with the representation
defined in [OData-JSON](#ODataJSON), labeled `compact=true`. This follows
from the [superset principle](#supersetprinciple) and replaces the
behavior of returning an error.

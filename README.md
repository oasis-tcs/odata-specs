Section and example numbers and references to them are expressed in the Markdown source as follows:
```
# ##sec Section Heading
## ##subsec Subsection Heading
### ##subsubsec Subsubsection Heading
Example ##ex: Example
Example ##ex_aggregation: Referenceable example
See [here](##_SubsectionHeading). Reference to a subsection.
See [subsection ##_SubsectionHeading]. Reference to a subsection showing its number.
See [this example](##_aggregation). Reference to an example.
See [example ##_aggregation]. Reference to an example showing its number.
```

Long mathematical formulas, especially multi-row ones such as `$$\matrix(...)$$`, can be typed on multiple lines, if each line except the last ends with a single space.

This additional syntax is resolved with the Node.js module [`lib/number.js`](lib/number.js).

Run `npm start` to start a Node.js server and access the HTML pages at, for example, `http://localhost/odata-aggr`.

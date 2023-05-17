Diagrams in the Visio `.vsdx` file are saved as `*.svg` (without included Visio data) and then embedded into the `.md` files with the following changes:
- Remove `<title>` and `<desc>` elements
- Adapt the `viewBox` attribute of the `<svg>` element
- Adapt CSS class names so that they are unique across all `<svg>` elements that belong to one OData specification document

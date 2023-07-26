-------

# ##sec Introduction

<!-- All text is normative unless otherwise labeled -->

## ##subsec Changes from earlier Versions

<!-- TODO -->
<!-- Describe significant changes from previous differently-numbered Versions, not changes between stages of the current Version -->

## ##subsec Glossary

### ##subsubsec Definitions of terms

### ##subsubsec Acronyms and abbreviations

<!-- TODO -->

### ##subsubsec Document conventions

Keywords defined by this specification use `this monospaced font`.

Some sections of this specification are illustrated with non-normative examples.

::: example
Example ##ex: text describing an example uses this paragraph style
```
Non-normative examples use this paragraph style.
```
:::

All examples in this document are non-normative and informative only. Examples labeled with ⚠ contain advanced concepts or make use of keywords that are defined only later in the text, they can be skipped at first reading.

All other text is normative unless otherwise labeled.

::: example
Here is a customized command line which will generate HTML from this markdown file (named `$$$filename$$$.md`). Line breaks are added for readability only:

```
pandoc -f gfm+tex_math_dollars+fenced_divs
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

This uses pandoc 3.1.2 from https://github.com/jgm/pandoc/releases/tag/3.1.2.
:::

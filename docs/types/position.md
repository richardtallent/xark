# XarkPosition

`Position` is a special structured type. It is used to indicate where, in an artifact, a `Claim` is found. If the claim appears in multiple locations, an array of of `Positions` can be used.

A `Position` consists of a `frame` (1-based) and a rectangle formed by `top`, `left`, `bottom`, and `right` attributes.

- For traditional documents and photographs, the `frame` indicates the "page" of the document. A photograph, for example, has a front and a back, so it has two "pages."
- For audiovisual artifacts, the `frame` indicates the millisecond where the position starts (not the video or cell frame). The optional `length` indicates how long the position is value, in milliseconds.
- The rectangle coordinates are in percentages, from 0-100.
- The rectangle coordinates _may_ be used for audio-only artifacts to indicate the perceived geospatial position of the relevant audio. Otherwise, for audio-only artifacts, they should be set to `0`.
- This _may_ be expanded with additional attributes for novel media types, but this will be considered a breaking change, so software is not required to retain unrecognized attributes.

## TypeScript Definition

<<< @/docs/.vuepress/public/ts/IPosition.ts

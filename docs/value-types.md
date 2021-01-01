# Value Types

XARK supports boolean, string, and numeric values. Each `Claim` type will have its own expected value type, and software **must** ensure that values are valid for the claim type.

## Special String Types

There are several "special" types of strings used as XARK values.

1. `XarkId`: This type is a special type of GUID/UUID known as a [COMB](https://github.com/richardtallent/RT.Comb). It is in the form `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, where each `x` is a hexadecimal digit. (Case does not matter, and dashes are optional).

2. `XArkDate`: XARK doesn't use native JavaScript dates. Instead, dates are stored in either [EDTF](https://www.loc.gov/standards/datetime/) (an extension of ISO 8601), or in other forms, such as GEDCOM. EDTF is **strongly preferred**, and dates should be converted where possible.

3. `XArkUri`: If this starts with a `#` and is followed by a `XarkId`, this is referring to a record within the same XARK file/resource. If it is a URL (_e.g._, beginning with `https://`), it refers to that remote URL. The remote URL may or may not resolve to a XARK file.

### TypeScript Definitions for Special String Types

<<< @/docs/.vuepress/public/ts/ValueTypes.ts

## Position

`Position` is a special structured type. It is used to indicate where, in an artifact, a `Claim` is found. If the claim appears in multiple locations, an array of of `Positions` can be used.

A `Position` consists of a `frame` (1-based) and a rectangle formed by `top`, `left`, `bottom`, and `right` attributes.

- For traditional documents and photographs, the `frame` indicates the "page" of the document. A photograph, for example, has a front and a back, so it has two "pages."
- For audiovisual artifacts, the `frame` indicates the millisecond where the position starts (not the video or cell frame). The optional `length` indicates how long the position is value, in milliseconds.
- The rectangle coordinates are in percentages, from 0-100.
- The rectangle coordinates _may_ be used for audio-only artifacts to indicate the perceived geospatial position of the relevant audio. Otherwise, for audio-only artifacts, they should be set to `0`.
- This _may_ be expanded with additional attributes for novel media types, but this will be considered a breaking change, so software is not required to retain unrecognized attributes.

### TypeScript Definition for Position

<<< @/docs/.vuepress/public/ts/IPosition.ts

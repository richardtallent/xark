# TypeScript Definitions

JSON implementations of XARK can take advantage of TypeScript definitions to help author and validate XARK records.

## Aliases

Several core "value" types used in XARK are, to JavaScript, simply strings. These include:

1. `XarkId`: This type is a special type of GUID/UUID known as a [COMB](https://github.com/richardtallent/RT.Comb). It is in the form `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, where each `x` is a hexadecimal digit. (Case does not matter, and dashes are optional).

2. `XArkDate`: XARK doesn't use native JavaScript dates. Instead, dates are stored in either [EDTF](https://www.loc.gov/standards/datetime/) (an extension of ISO 8601), or in other forms, such as GEDCOM. EDTF is **strongly preferred**, and dates should be converted where possible.

3. `XArkUri`: If this starts with a `#` and is followed by a `XarkId`, this is referring to a record within the same XARK file/resource. If it is a URL (_e.g._, beginning with `https://`), it refers to that remote URL. The remote URL may or may not resolve to an XARK file.

<<< @/docs/.vuepress/public/ts/Aliases.ts

## Records

This is the "base" interface, and includes both a permanent ID and a revision-specific ID.

<<< @/docs/.vuepress/public/ts/IRecord.ts

## Xark

This is the top-level record of the JSON store. It contains an array of `IArtifact`.

<<< @/docs/.vuepress/public/ts/IXark.ts

## Artifacts

`IArtifact` has optional arrays of `ISubject`, `IClaim`, and `IEvent`.

<<< @/docs/.vuepress/public/ts/IArtifact.ts

## Subjects

<<< @/docs/.vuepress/public/ts/ISubject.ts

## Claims

<<< @/docs/.vuepress/public/ts/IClaim.ts

## Events

<<< @/docs/.vuepress/public/ts/IEvent.ts

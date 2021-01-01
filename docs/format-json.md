# JSON

JavaScript Object Notation, or JSON, is human-friendly, more compact than XML, uses UTF-8 encoding, and is universally understood by web browsers, so it's a natural choice for standalone files and for sharing on the web.

Because JSON is hierarchal, XARK's hierarchy can be represented directly in the file, there is no need for (and there should not be) explicit `parent` properties pointing back to the parent record.

- Xark
  - Artifact...
    - Subject...
      - Claim...
        - Note...

The `Xark` node is the top-level record of the JSON store. It contains an array of `IArtifact`.

All properties in JSON format should be in **camelCase**.

TypeScript definitions are available to help in authoring and validating XARK records.

## TypeScript Definitions

<<< @/docs/.vuepress/public/ts/IRecord.ts

<<< @/docs/.vuepress/public/ts/IXark.ts

<<< @/docs/.vuepress/public/ts/IArtifact.ts

<<< @/docs/.vuepress/public/ts/ISubject.ts

<<< @/docs/.vuepress/public/ts/IClaim.ts

<<< @/docs/.vuepress/public/ts/INote.ts

<<< @/docs/.vuepress/public/ts/IEvent.ts

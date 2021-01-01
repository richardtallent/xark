# Artifacts

An `Artifact` represents all knowledge about a _single_ source of genealogical information -- a book, document, personal story, web site, etc.

- `Artifacts` can be _derived from_ one or more other `Artifacts`.
- `Artifacts` can be _referenced from_ one another locally (within the XARK file) or at a remote URI.
- `Artifacts`, as already mentioned, are the "containers" or "parents" for `Subject`, `Claim`, `Event`, and `Note` entities.
- `Artifacts` **are never** the "container" or "parent" of other `Artifacts`, though they can be related to other `Artifacts`.

A single XARK file will usually contain _many_ `Artifact` nodes. First, it will generally have one `Artifact` node for each document of interest, containing information extracted from the document with _minimal interpretation_ (this is consistent with the overall concept of "persona"-based research). Second, the XARK file will generally contain one or more `Artifact` nodes representing the genealogist's own synthesis of the data within those documents (_i.e._, their "conclusions").

A key concept here is that an `Artifact` can represent either primary information (transcribed/extracted directly from a source) or secondary information (conclusions reached by some researcher in their own family tree), and as such, a researcher can reference another researcher's conclusions.

Even for a single researcher, it may be beneficial to maintain several `Artifact` nodes within a single XARK file, say, one for each family of interest. For example, my wife's family and mine are separate research interests for me, but I would want to maintain them in a single file. I may want to do the same for my maternal and paternal lines.

The `Artifact` nodes are where all bibliographic information should be stored.

## Required Properties

### ID

The unique XARK ID.

### RevisionID

The unique XARK ID of this _revision_ of this entity.

## Optional Properties

### Range

When embedding XARK in another document, there may also be multiple `Artifact` records -- for example, if multiple PDF files are combined. However, since document joining/editing programs likely won't be aware of XARK locations, it's likely that this will result in `Claims` linked to a certain frame will now be referring to the wrong page.

To help alleviate this, an `Artifact` _may_ have `Range` property, with a 1-based `start` and `end` number (inclusive) to show which _frames_ are covered by the `Subject`, `Claims`, and `Notes` within that `Artifact` record. While general-purpose document editing programs won't adjust these values automatically, this will make it far easier to re-align the associated claims later.

- Software reading XARK _should_ use this to "offset" the frame numbers of locations from `Claims` associated with `Subjects` in that `Artifact`.
- Software _should not_ normalize these frame numbers when saving again, since this would make it more difficult to split the document. If such functionality is present, it must be chosen by the user on purpose.
- Software _should_ ignore and remove `Artifacts` and their `Subjects` and `Claims` if the `Artifact`'s _entire_ frame range is no longer in the document. This will allow users to use general-purpose document editors to split documents and XARK software will auto-correct to remove the "ghosts" of artifacts no longer present.
- Where software detects that a Subject has an out-of-range Location claim, it _should_ flag this for user review, so they can either correct the location or remove the `Subject` and its `Claims`.

## TypeScript Definition for JSON

<<< @/docs/.vuepress/public/ts/IRecord.ts
<<< @/docs/.vuepress/public/ts/IArtifact.ts

## JSON Example

```json

```

## XMP (XML+RDF) Example

```XML
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xark="https://xark.org/xark"
	xmlns:stRange="https://xark.org/xark/1.0/sType/Range#">
	<rdf:Description>
		<xark:class>https://xark.org/xark#artifact</xark:class>
		<xark:id>51664aac-acde-4e67-af44-0176bef3b81b</xark:id>
		<xark:revision-id>51664aac-acde-4e67-af44-0176bef3b81b</xark:revision-id>
		<xark:range>
			<rdf:description>
				<stRange:start>1</stRange:start>
				<stRange:end>5</stRange:end>
			</rdf:description>
		</xark:range>
	</rdf:Description>
</rdf:RDF>
```

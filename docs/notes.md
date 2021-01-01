# Notes

Note packets are for recording the researchers' notes, providing a place to explain how the `Claim` was extracted from the source artifact, how certain assumptions were made in assigning the value or veracity, etc.

## Required Properties

### ID

The unique XARK ID.

### RevisionID

The unique XARK ID of this _revision_ of this entity.

### Parent

The unique XARK ID of the `Claim` this belongs to. This must be a _local_ `Claim` (part of the same `Artifact`).

### Author

URI pointing to the author of the note (a person, organization, etc.). This may be a web page, email address, username, or other URI.

### Note

The text of the note. Notes can be plain text or several forms of rich text (see below).

## Optional Properties

### Type

String with the MIME type of the note. Without this property, HTML is assumed. Valid values are `text/plain`, `text/html`, and `text/markdown`.

### Private

Boolean. If true, the note should _not_ be exported or shared by default.

## TypeScript Definition for JSON

<<< @/docs/.vuepress/public/ts/IRecord.ts
<<< @/docs/.vuepress/public/ts/INote.ts

## JSON Example

```json

```

## XMP (XML+RDF) Example

```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xark="https://xark.org/xark">
	<rdf:Description>
		<xark:class>https://xark.org/xark#note</xark:class>
		<xark:id>a71d149a-ea50-4af7-b7e9-0176bfb7a78a</xark:id>
		<xark:revision-id>a71d149a-ea50-4af7-b7e9-0176bfb7a78a</xark:revision-id>
		<xark:parent>e27bed33-525b-4fa1-947b-0176bf096339</xark:parent>
		<xark:type>text/plain</xark:type>
		<xark:author>https://tallent.us/</xark:author>
		<xark:note>This is a note</xark:note>
	</rdf:Description>
</rdf:RDF>
```

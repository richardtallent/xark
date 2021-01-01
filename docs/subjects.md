# Subjects

## Required Properties

### ID

The unique XARK ID.

### RevisionID

The unique XARK ID of this _revision_ of this entity.

### Parent

The unique XARK ID of the `Artifact` this belongs to. This must be a _local_ `Artifact` (part of the same file/database/account).

### Type

A URI representing the type of subject.

| URI                                  | Description                                                       |
| ------------------------------------ | ----------------------------------------------------------------- |
| `https://xark.org/zark#person`       | Person                                                            |
| `https://xark.org/zark#place`        | Place (geographic, geopolitical, or physical address / structure) |
| `https://xark.org/zark#animal`       | Animal (pet, etc.)                                                |
| `https://xark.org/zark#thing`        | Thing (physical object)                                           |
| `https://xark.org/zark#organization` | Organization (corporate, academic, religious, etc.)               |

This may be expanded over time. Software **should** allow full access to view unrecognized types, but **may** opt to not allow users to edit the associated claims and other data, since the software may not have the business logic for representing that type.

## TypeScript Definition for JSON

<<< @/docs/.vuepress/public/ts/IRecord.ts
<<< @/docs/.vuepress/public/ts/ISubject.ts

### JSON Example

```json

```

### XMP (XML+RDF) Example

```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xark="https://xark.org/xark">
	<rdf:Description>
		<xark:class>https://xark.org/xark#subject</xark:class>
		<xark:id>5d01651e-9e9c-4240-a218-0176bef7de8f</xark:id>
		<xark:revision-id>5d01651e-9e9c-4240-a218-0176bef7de8f</xark:revision-id>
		<xark:parent>51664aac-acde-4e67-af44-0176bef3b81b</xark:parent>
		<xark:type>https://xark.org/xark#person</xark:type>
	</rdf:Description>
</rdf:RDF>
```

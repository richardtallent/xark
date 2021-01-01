# Claims

`Claims` are the primary mechanism for decorating `Subjects` with properties and relationships.

## Required Properties

### ID

The unique XARK ID.

### RevisionID

The unique XARK ID of this _revision_ of this entity.

### Parent

The unique XARK ID of the `Subject` this belongs to. This must be a _local_ `Subject` (part of the same `Artifact`). The local `Subject` may in turn be related to a remote one, but `Claims` must always be local.

### Category

There are three categories of `claims`: `Facts`, `Relationships`, and `Roles`.

- A `Fact` links a `Subject` to a standalone value.
- A `Relationship` links a `Subject` to another `Subject`.
- A `Role` links a `Subject` to an `Event`.

### Type

URI. The type of claim being made. See below for a list of standard claim types. This can be extended as needed or for private use.

## Optional Properties

## Value

The `Value` is the thing being asserted. This can be a number, text value, a URN to a local Subject or Event ID, or a URL (including but not limited to a link to a remote Subject or Event). Values themselves should _NOT_ contain a certainty since all claims can have an optional certainty.

::: warning
How date values are handled is still in flux. Dates almost always pair with locations, and are almost always then shared with other claims, so date values may be banned and required to instead be a relationship to an `Event` record. This is still being worked out to balance efficiency with not duplicating information.
:::

While values are _theoretically_ optional, that is only because information may not yet be available. Claims with no `Value` should be flagged as incomplete and needing resolution. For example, you might know someone was married but not know their spouse's name. So, you can't create a `Subject` for the spouse yet, but you can still create the marriage relationship.

### Private

Boolean. If true, this should _not_ be exported or shared by default.

::: warning
I'm still working out this concept. It could be as simple as a flag stating whether the claim should be published or not, which would allow easy creation of XARK files that could be shared or published online without, say, compromising sensitive information about living individuals. But it could also be a more nuanced policy.
:::

## Veracity

An optional `Veracity` value can be assigned for a claim, representing how the researcher feels about the claim's truthfulness or credibility. Possible values are `False`, `Probably False`, `Possibly`, `Probably True`, and `True`. `True` should be used when the claim is _reasonably_ true, and `Probably True` should be used when there is reasonable doubt _based on the source information, not based on supposedly-conflicting other sources_ that the claim would be true.

## Position

An optional [Position value](/value-types) can be assigned for a claim, showing _where_ in the artifact the claim appears. If the claim is shown multiple times in the artifact, this can be an **array** of values (order not preserved).

## Associated Events

::: warning
This is still in flux.
:::

When a `Claim` _does not_ represent an Event Role, the claim may have links to Events that give the claim a geographic and temporal context. For example, a marriage relationship `Claim` could be linked to various events related directly to that marriage -- the ceremony, the reception, the engagement announcement, a divorce proceeding, etc.

In other words, a `Claim` should only be linked to `Events` _directly_ involved in that claim, not merely those that support or mention the relationship. For example, one should _not_ link a census `Event` to a marriage, even if the census provides evidence of a marriage.

Each linked `Event` should provide a `Context` value that relates the event's timeframe to the claim. The allowed values are `Before`, `Start`, `During`, `End`, `Around`, and `After`. For example, the `Event` of a marriage ceremony would be at the `Start` of a marriage relationship between the spouses, and a divorce event would be at the `End` the relationship. (It is probably not a good practice to use death events to end marriages, as ALL relationships theoretically end upon death.)

The same `Event` can be linked to many `Claims`. For example, the same birth event may link to claims for the child's birth and the relationships they have to their parents. This is why the `Role` field is important. However, as above, it should not be linked to the parent's marriage claim.

There is absolutely NO automatic linkage between claims of a relationship and claims of an event role. Being the "spouse" on a marriage event does NOT automatically create a marriage relationship claim between the spouses, nor vice versa.

The reason for this is that managing these links would be far too complex for software and the data model. The purpose of the Event Role is often to associate people who have a _transient_ relationship to other people for that event, or to the event itself. For example, "photographer" is a role someone plays at an event, it isn't a lifelong relationship between the spouses of a wedding and their wedding photographer.

## TypeScript Definition for JSON

<<< @/docs/.vuepress/public/ts/IRecord.ts
<<< @/docs/.vuepress/public/ts/IClaim.ts

## JSON Example

```json

```

## XMP (XML+RDF) Example

```xml
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xark="https://xark.org/xark">
	<rdf:Description>
		<xark:class>https://xark.org/xark#subject</xark:class>
		<xark:id>2de14dbf-1e78-43b4-aa93-0176befbaa8a</xark:id>
		<xark:revision-id>2de14dbf-1e78-43b4-aa93-0176befbaa8a</xark:revision-id>
		<xark:parent>5d01651e-9e9c-4240-a218-0176bef7de8f</xark:parent>
		<xark:type>http://www.xark.org/xark#name-first</xark:subject>
		<xark:value>Joseph</xark:value>
	</rdf:Description>
</rdf:RDF>
<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xark="https://xark.org/xark">
	<rdf:Description>
		<xark:class>https://xark.org/xark#subject</xark:class>
		<xark:id>e27bed33-525b-4fa1-947b-0176bf096339</xark:id>
		<xark:revision-id>e27bed33-525b-4fa1-947b-0176bf096339</xark:revision-id>
		<xark:parent>5d01651e-9e9c-4240-a218-0176bef7de8f</xark:parent>
		<xark:type>http://www.xark.org/xark#name-last</xark:subject>
		<xark:value>Sullivan</xark:value>
		<xark:veracity>True</xark:veracity>
	</rdf:Description>
</rdf:RDF>
```

## Claim Types

### Same-As

Value type: URI

This claim indicates that the `Subject` _is the same as_ another `Subject`. The other `Subject` is identified by either a URI (if the `Subject` is a remote file) or just the XARK ID (if it is part of the same local document).

#### Use Case: Tree Branches

Let's say I want to have my family in one tree, my wife's family in another tree, and us and our children in a third tree. I can create three separate `Artifacts` (as separate files or in the same file), and where there are people in common across those branches, I can store my research for that person in one Artifact, and create "stubs" linking to that person from the other branches.

#### Use Case: Distributed Research

This is really a variation on the first use case above. By splitting the family into branches, I can share the work with other researchers, creating key "links" of people in my tree to theirs. My version of those `Subjects` may have no actual information, just the link, in which case I'm relying on that researcher's work. Or, I may do my own research on some of the same people, but by linking them, I can coordinate with the other researcher(s) and hopefully check each other's work. If I disagree with one of their claims about that person, as is bound to happen with conflicting evidence, I can just create my own claim on my version of that person.

#### Use Case: Personas to Persons

As I collect artifacts (photos, documents, etc.), each will contain `Subjects` and claims about those subjects. Many of them will be referring to the same actual person, organization, place, etc. I can treat each artifact as its own "world" with its own subjects and claims. Then, I can create a standalone `Artifact` to represent my _conclusions_ about who's who (_i.e._, my "family tree"). In that tree, I can _synthesize_ the information gleaned from the various sources into a new `Subject` with my conclusions about their life, relationships, etc., and I can link that `Subject` back to every source artifact where I believe I found them mentioned.

#### Use Case: Globally Shared Information

Keep in mind that a `Subject` can be a place, organization, etc., not just a person. That means there is a significant opportunity for researchers, libraries, organizations, etc. to create and share a "canonical" set of subjects and claims relevant to other researchers.

For example, a county government could create and publish a XARK file with `Subjects` and `Claims` of interest to researchers, such as how and when the government was founded, where the seat of government was, who the elected officials were over time, etc. This need not be published by an official source, either -- the same sort of information could be published by a third-party service, whether commercial or public-access.

Also note that while the URI _may_ resolve to a `Subject` entity within another XARK file, it _is not required to do so._ I can, for example, create a `Subject` representing a county and link it to the Wikipedia page for that county. Certainly, linking to a solid remote XARK file is preferable, but _requiring_ it would handicap the usefulness of having a remote `Subject` until virtually all genealogical information about those subjects is also in XARK format, and I'm not willing to assume 100% adoption.

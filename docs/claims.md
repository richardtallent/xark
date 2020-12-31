# Claims

`Claims` are the primary mechanism for decorating `Subjects` with properties and relationships. Every claim has a primary **Subject**, a **Type**, and a **Value**.

There are three categories of `claims`: `Facts`, `Relationships`, and `Roles`.

- A `Fact` links a `Subject` to a standalone value.
- A `Relationship` links a `Subject` to another `Subject`.
- A `Role` links a `Subject` to an `Event`.

The `Subject` is the XARK ID of a **local** Subject node. The local Subject may in turn refer to a remote one, but all Claim references must be to the local ID.

The `Type` is a URI describing how the Subject relates to the Value. This generally will represent either a type of fact, relationship, or role.

The `Value` is the thing being asserted. This can be a number, text value, a URN to a local Subject or Event ID, or a URL (including but not limited to a link to a remote Subject or Event). Values themselves should _NOT_ contain a certainty since all claims can have an optional certainty. It is important to note that values are NEVER dates. Period. Any claim that involves a Date should instead link to an Event, which gives the claim a geospatial and temporal context.

Allowing for `Value` to be optional was considered, but in all cases tested, removing the `Value` would require additional enumerated `Types`. Requiring a `Value` allows the `Types` to be broad and allow for covering use cases not considered. For example, rather than creating one Type for "Dead" and another for "Alive," it is better to have a type "Living Status" with those two value choices.

If a value has not been provided yet, it should receive a `null` value. For example, you might know someone was married but not know their spouse's name. So, you can't create a `Subject` for the spouse yet, but you can still create the marriage relationship. However, in these cases, the Claim should be flagged in software as incomplete and needing resolution.

There are also some optional fields:

## Certainty

An optional `Certainty` value can be assigned for a claim, representing how the researcher feels about the claim's validity. Possible values are `False`, `Probably False`, `Possibly`, `Probably True`, and `True`. `True` should be used when the claim is _reasonably_ true, and `Probably True` should be used when there is reasonable doubt _based on the source information, not supposedly-conflicting other sources_ that the claim would be true.

**Note: the exact ways that Events and Claims are related is still in flux. This is one of the hardest problems to solve in genealogical data modeling.**

## Associated Events

When a `Claim` _does not_ represent an Event Role, the claim may have links to Events that give the claim a geographic and temporal context. For example, a marriage relationship `Claim` could be linked to various events related directly to that marriage -- the ceremony, the reception, the engagement announcement, a divorce proceeding, etc.

In other words, a `Claim` should only be linked to `Events` _directly_ involved in that claim, not merely those that support or mention the relationship. For example, one should _not_ link a census `Event` to a marriage, even if the census provides evidence of a marriage.

Each linked `Event` should provide a `Context` value that relates the event's timeframe to the claim. The allowed values are `Before`, `Start`, `During`, `End`, `Around`, and `After`. For example, the `Event` of a marriage ceremony would be at the `Start` of a marriage relationship between the spouses, and a divorce event would be at the `End` the relationship. (It is probably not a good practice to use death events to end marriages, as ALL relationships theoretically end upon death.)

The same `Event` can be linked to many `Claims`. For example, the same birth event may link to claims for the child's birth and the relationships they have to their parents. This is why the `Role` field is important. However, as above, it should not be linked to the parent's marriage claim.

There is absolutely NO automatic linkage between claims of a relationship and claims of an event role. Being the "spouse" on a marriage event does NOT automatically create a marriage relationship claim between the spouses, nor vice versa.

The reason for this is that managing these links would be far too complex for software and the data model. The purpose of the Event Role is often to associate people who have a _transient_ relationship to other people for that event, or to the event itself. For example, "photographer" is a role someone plays at an event, it isn't a lifelong relationship between the spouses of a wedding and their wedding photographer.

## Privacy Policy

Every `Claim` may have an optional privacy policy value. I'm still working out this concept. It could be as simple as a flag stating whether the claim should be published or not, which would allow easy creation of XARK files that could be shared or published online without, say, compromising sensitive information about living individuals.

# XMP

When XARK is used to store information about a digital artifact (transcriptions, people, dates, etc.), it is preferable to store this information _inside the artifact file itself_. This helps to ensure that the evidence remains with the source as it is shared.

The [XMP Standard](https://www.adobe.com/devnet/xmp.html) (ISO 16684-1) was developed primarily by Adobe, and provides a means of storing XML+RDF data within JPEG, PDF, WebP, and other common file formats. It is comprised of RDF statements encoded in XML. Since it relies on RDF's data model, XMP has a very "flat" hierarchy (unlike JSON). Each XMP "packet" can only contain a set of properties, where each property has a property identifier (a URI) and a value (several possible types). To accommodate this format, XARK data should be stored with separate **XMP packets** for each `Artifact`, `Subject`, `Claim`, and `Note`.

There **must** be at least one `Artifact` packet per file. There will **usually** be multiple `Subject` packets per artifact, and multiple `Claim` packets per subject. `Note` packets are optional and not necessarily expected.

Each property identifier can only appear once per packet. Multiple values for a given property are supported using unordered arrays, ordered arrays, or structured values.

Because we are not storing the entities in a hierarchy, there are two additional **required properties** that would not be required in hierarchal formats such as JSON (where these are known from the hierarchy context):

::: tip
All property names in XMP are in `kebab-case` (lowercase, dash-delimited). This differs from JSON, where they are rendered in `pascalCase`.
:::

## Required Properties

### Class

To identify whether the XMP Packet represents an `Artifact`, `Subject`, `Claim`, or `Note`. Valid values:

- `https://xark.org/xark#artifact`
- `https://xark.org/xark#subject`
- `https://xark.org/xark#claim`
- `https://xark.org/xark#note`

### Parent

To identify the XARK ID of the _parent_ of this entity. Each `Note` links back to its parent `Claim`, each `Claim` to its parent `Subject`, and each `Subject` back to its `Artifact`.

::: warn
Values **are not** permitted to be arrays. While RDF allows for this, it is not compatible with the XARK itself. If there are multiple "truths" for a given attribute (for example, someone with multiple middle names), these should be stored as separate `Claims`.
:::

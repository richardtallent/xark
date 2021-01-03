# XARK IDs

Everything XARK record has a globally-unique `id` property (which does not change) as well as a globally-unique `revisionId` field (which changes each time the record is modified).

These IDs are **magical**. The benefits include:

- Compatible with EAD IDs, XML IDs, HTML DOM IDs (begin with alpha, allowed characters `A-Za-z0-9:._-`)
- Compatible with URIs without encoding (characters `A-Za-z0-9_.\~-`)
- Compatible with JSON or XML strings without encoding
- Compatible with legacy GEDCOM IDs (Max length 20, characters `A-Za-z0-9_.?<>~\/~#$%^&*()[+-`)
- Globally unique -- no reasonable chance of accidental duplication
- Has a built-in, global, millisecond-resolution timestamp
- Can be easily used, stored, and indexed in a standard GUID/UUID data structure
- Can be easily used, stored, and indexed as a string when a GUID isn't possible
- Is only 20 characters long!

The values used for this field are generated in a specific manner to help ensure that they are never repeated (even across many independent researchers working on their own computer systems), and to ensure that the same value can be referenced in a variety of contexts.

## Data Structure (native)

| Bits   | Usage                                                          |
| ------ | -------------------------------------------------------------- |
| 00-47  | LSB of Unix timestamp (milliseconds since the Unix epoch, UTC) |
| 48-119 | Randomly-generated                                             |

## GUID Encoding

| Bits   | Usage                                                          |
| ------ | -------------------------------------------------------------- |
| 00-47  | LSB of Unix timestamp (milliseconds since the Unix epoch, UTC) |
| 48-51  | `0100b` GUID Version 4                                         |
| 52-55  | Randomly-generated bits 48-51                                  |
| 56-59  | `1000b` GUID Variant `10` and static bits `00`                 |
| 60-127 | Randomly-generated bits 52-119                                 |

A valid GUID encoding can be generated using the `RT.Comb` library with the `PostgreSqlCombProvider` and `UnixTimestampProvider` options.

## Normal String Encoding

For string serializations that support traditional representations of a GUID as a string (_i.e._, as hexadecimal with optional `-` separators and no guarantee of starting with a letter), this is permitted. Lowercase letters should be preferred.

## Compact String Encoding

The default encoding is a 20-character string. This is done by performing a Base64 encoding of the number. (If coming from/to a GUID, the Version and Variant nybbles are not included in this encoding.)

Base64 usually uses the characters `+` and `/` (see RFC 4648 Table 2), but these are not permitted in a number of ID contexts, so we use the characters `-` and `\_` instead.

Base64 also requires a trailing `=`, but that should not be included.

Because the timestamp comes first and will have very small most significant bit values for many centuries to come, `Base64` encoding will result in a value that starts with a letter.

## Compatibility

- Software **must** support reading both encodings.
- Software **must** treat both encodings as equivalent when comparing values.
- Software **must** present the embedded timestamp to the user (since it is the timestamp field).
- Software **must** use the UTC timezone for the timestamp, not the local time.
- Software **must not** generate timestamps using any means other than the _current_ system time.
- Software **may** allow the user to choose the encoding form they want and normalize to that form.
- Software **must** use the compact form when saving to GEDCOM files unless the GEDCOM variant supports the long UUID form.

## Implementations

The reference implementation is built in .NET 5, called [RT.XarkId](https://github.com/richardtallent/RT.XarkId).

## Checksum UUIDs

Various GEDCOM implementations that support UUID-based IDs (an extension to the standard) also replace a portion of the UUID with a checksum of the data in the element being encoded.

While these extensions overwrite a different set of bits than XARK IDs rely on and this would still provide 50 bits of entropy, XARK IDs should not be overwritten with checksum data, because XARK IDs should _never change_, even if the underlying data are changed.

That said, a checksum _can_ be optionally applied to the XARK Revision ID since the revision IDs change every time the content changes, and they are not cross-referenced to any other data. Software **must not** require that such checksums be applied or maintained, but **may** allow the user to review Revision IDs that no longer match the checksum and allow them to update the Revision IDs.

This document does not attempt to standardize how one would go about performing that checksum, other than to mention that checksums should be standardized so the same value results regardless of the form being serialized (JSON, XMP, etc.), and that CR/LF character sequences should be normalized so changes to line terminators in the serialization or in the input data do not impact the checksum.

## References

[EAD ID](https://www.loc.gov/ead/EAD3taglib/index.html)
[URI Unreserved Characters](https://tools.ietf.org/html/rfc3986#section-2.3)

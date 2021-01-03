# XarkDate

XARK doesn't use native JavaScript or standard ISO or Unix dates. Instead, dates are stored in either [EDTF](https://www.loc.gov/standards/datetime/) (an extension of ISO 8601), or in other forms, such as GEDCOM.

EDTF is **strongly preferred**, and dates should be converted where possible.

The TypeScript alias for this type is `XarkDate`.

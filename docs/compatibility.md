# Compatibility

XARK is not concerned with the ability to convert _from_ XARK _to_ extant standards like GEDCOM and Gramps XML. If the concepts align enough for conversion back to an earlier or alternative format, great, but XARK's concepts will not be limited to those that fit well with legacy formats.

XARK organizes information in a _fundamentally different_ way than GEDCOM. GEDCOM and its derivatives, such as GEDCOM X and ELF, were designed to primarily store an individual genealogist's family tree -- their _conclusions_ about matters such as who-married-whom, who-died-when, etc. This is fine for casual tree-building, but inadequate for researchers who wish to first _document_ their the sources they find, and to _then_ draw conclusions based on the evidence. GEDCOM is also intended for sharing entire family trees, but is nearly useless for distributed, collaborative research.

It is _certainly_ possible, with some effort, to convert GEDCOM or similar files _into_ proper XARK files. However, this converted data will still be a "house of cards" of conclusions lacking proper ties back to the core evidence. So, after the initial conversion, the researcher will want to go back to the artifacts, document each artifact's subjects and claims, and link them back to these conclusions.

It is also possible, using GEDCOM SOUR records, for a GEDCOM-style file to link its conclusions back _to_ XARK records. This may be preferable, at least for the time being, for researchers who wish to have the convenience of existing family tree software to record their conclusions, but who still want to do the due diligence to collect, archive, and analyze the underlying evidence.

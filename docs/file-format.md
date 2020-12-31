# File Format

XARK is, by itself, not a file format, and does not specify how the data are stored or transmitted. File serializations come and go over time, and XARK is intended to outlive them.

As of 2021, the _suggested_ format for _general use_ is JSON -- JavaScript Object Notation. This file format is human-friendly, more compact than XML, and uses UTF-8 encoding. However, one could also use XML, YAML, or semantically-tagged HTML. The data model certainly also lends itself to storage and indexing in either traditional relational databases or so-called "No-SQL" databases. If one were a glutton for punishment, I expect XARK data could be embedded directly within GEDCOM files...

When XARK is used to store _evidence_ about a digital artifact (transcriptions, people, dates, etc.), it is preferable to store this information _inside the artifact file_, with no direct links to other files. This allows each file to be researched and documented individually, then shared with any number of other people who have similar or different research needs. It also helps ensure that the evidence data are never separated from the digital source itself as the file is shared.

Because of this, XARK's data model was specifically designed to be easily serialized using Adobe's XMP standard (which is in turn built on XML and RDF). This allows XARK records to be easily _embedded_ within photographs, scanned documents, etc. While there are other metadata standards out there for XMP that are designed for library archival information, XARK is designed to model the information _within_ the documents -- the people, places, relationships, etc. So, XARK can live beside other metadata, such as Dublin Core. There is strong software support for XMP already, so XARK is able to build on that support.

# Artifacts

An `Artifact` represents all knowledge about a _single_ source of genealogical information -- a book, document, personal story, web site, etc.

- `Artifacts` can be _derived from_ one or more other `Artifacts`.
- `Artifacts` can be _referenced from_ one another locally (within the XARK file) or at a remote URI.
- `Artifacts`, as already mentioned, are the "containers" or "parents" for `Subject`, `Claim`, `Event`, and `Note` entities.
- `Artifacts` **are never** the "container" or "parent" of other `Artifacts`, though they can be related to other `Artifacts`.

A single XARK file will usually contain _many_ `Artifact` nodes. First, it will generally have one `Artifact` node for each document of interest, containing information extracted from the document with _minimal interpretation_ (this is consistent with the overall concept of "persona"-based research). Second, the XARK file will generallly contain one or more `Artifact` nodes representing the genealogist's own synthesis of the data within those documents (_i.e._, their "conclusions").

An key concept here is that an `Artifact` can represent either primary information (transcribed/extracted directly from a source) or secondary information (conclusions reached by some researcher in their own family tree), and as such, a researcher can reference another researcher's conclusions.

Even for a single researcher, it may be beneficial to maintain several `Artifact` nodes within a single XARK file, say, one for each family of interest. For example, my wife's family and mine are separate research interests for me, but I would want to maintain them in a single file. I may want to do the same for my maternal and paternal lines.

The `Artifact` nodes are where all bibliographic information should be stored.

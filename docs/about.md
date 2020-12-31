# About XARK

## Why Another Standard?

GEDCOM, GEDCOM X, FHISO ELF, and other initiatives have focused on modeling and storing the _conclusions_ of our genealogical efforts. These conclusions, while important, do not address a significant need to also model the _evidence itself_. They all have been bogged down in the same mental mode as GEDCOM -- the idea that all of our data should reside in the One Big Family History File. This is an antiquated and unsustainable way to model both evidence and conclusions.

There are other possible use cases as well, from legal research to organizing character and place information for writing or analyzing fiction.

## What does XARK stand for?

The acronym (pronounced exactly as you would expect) stands for **eXtensible Archival Record Knowledgebase**.

## Structure

XARK's data model is purposefully very simple. There are only four "record" types:

1. [Artifacts](./artifacts). An individual physical or digital source of information (a book, document, photo, story, web site, etc.)

2. [Subject](./subjects). A person, place, animal, thing, or organization referred to by an `Artifact`.

3. [Claims](./claims). A single piece of information about a `Subject` derived from the `Artifact`.

4. [Events](./events). Not surprisingly, this represents an event. In XARK, "events" are geospatial (having a place) and temporal (having a time).

The data model is also fairly "flat" -- there is no strict "hierarchy," other than that _all_ `Subjects`, `Claims`, and `Events` must have a parent `Artifact`, and they _only_ belong to that `Artifact`. For example, if "Joe Brown" is mentioned in two source documents, there are two Joe Brown `subjects` -- one for each artifact -- even if you as the researcher believe them to represent the same human being. (XARK can also be used to make your claim that those two people are the same -- that will be explained later.)

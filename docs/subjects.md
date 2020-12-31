# Subjects

Each `Subject` has two required pieces of information, and one optional one:

- **ID**: (required) an XARK GUID that will be used to refer to this subject.
- **Type**: (required) a URI representing the type of subject. URIs fill be provided for the following standard types, but this can be extended to support others in the future:
  - Person
  - Place (geographic, geopolitical, or physical address / structure)
  - Animal
  - Thing
  - Organization (corporate, academic, religious, etc.)
- **ParentSubject**: (optional) a URN to a `Subject` within another `Artifact` in the same XARK file, _or_ a remote URL.

The benefit of creating a `Subject` node linking to a `Subject` in another `Artifact` in the same file is that it easily allows splitting up research of families that have common people. For example, if I maintain a separate `Artifact` in my file for my family and my wife's, I can create our common family members (each other, our children, and distant shared relatives) in one `Artifact` and create a link to them from the other.

The benefit of creating a `Subject` node linking to a remote `Subject` is that I can essentially include research from other researchers in my own family history without having to duplicate that information. Keep in mind that a `Subject` can be a place, organization, etc., not just a person, so there is ample opportunity for individual researchers, libraries, organizations, etc. to create shared information of interest to many researchers.

A remote `Subject` URI _may_ resolve to a `Subject` entity within another XARK file, but it _is not required to do so._ I can, for example, create a `Subject` representing a county and link it to the Wikipedia page for that county. Certainly, linking to a solid remote XARK file is preferable, but _requiring_ it would handicap the usefulness of having a remote `Subject` until virtually all genealogical information about those subjects is also in XARK format, and I'm not willing to assume 100% adoption.

# Example: Family Photo

Here's a photo from my family's archives:

| Front                                                  | Reverse                                                  |
| ------------------------------------------------------ | -------------------------------------------------------- |
| ![Example Family Portrait](/1925c-xx-xx-003-front.jpg) | ![Example Family Portrait](/1925c-xx-xx-003-reverse.jpg) |

So, we have three people on the front of the photo, and based on the writing on the back, they are `Marie Laycock`, `James Laycock`, and `James Neal Laycock`. It's important to note that this is precisely how those names are written, this may not match with their known full names (or maiden/married names, etc.).

For all of these examples, I'll only include the `id` if they are referenced by a claim value, and I won't show the `subject` portion of each claim because the JSON file is hierarchal, so the `subject` is whichever `Subject` the `Claim` sits under. Where I do include IDs, I've used a simple number rather than the proper XARK ID format.

First, we need to create an archive for our information:

```json
{
	"id": 1,
	"revisionId": 1,
	"artifacts": []
}
```

Now, we'll add an `Artifact` record for our photograph. This represents the abstract _idea_ of this photograph, it may exist in various physical and digital incarnations.

```json
{
	"id": 1,
	"revisionId": 1,
	"artifacts": [
		{
			"id": 2,
			"type": "https://xark.org/xark#photograph"
		}
	]
}
```

Three people are pictured, so we'll create a `Subject` for each person:

```json
{
	"id": 1,
	"revisionId": 1,
	"artifacts": [
		{
			"type": "https://xark.org/xark#photograph-film",
			"subjects": [
				{
					"type": "https://xark.org/xark#person"
				},
				{
					"type": "https://xark.org/xark#person"
				},
				{
					"type": "https://xark.org/xark#person"
				}
			]
		}
	]
}
```

Next, we add some `Claims` about each `Subject` in the photo. There are four types of claims shown here, but others could be made:

1. First name, a string
2. Middle name, a string
3. Last name, a string
4. Pictured, a Boolean value (usually true) and a [Position](/value-types) structure.

In all of the above, note that a `Subject` can have multiple `Claims` of the same type from the same `Artifact`. For example, if the artifact is a yearbook, a given student may be pictured and/or mentioned in multiple places in the yearbook, each having its own claims of their name and each having its own Position.

While this looks verbose, keep in mind that XARK records are intended to be loaded and saved by software, which would present easy-to-use forms to, for example, draw boxes around each identified person and key in their names or other information.

```json
{
	"id": 1,
	"revisionId": 1,
	"artifacts": [
		{
			"id": 2,
			"type": "https://xark.org/xark#photograph-film",
			"subjects": [
				{
					"type": "https://xark.org/xark#person",
					"claims": [
						{
							"type": "http://www.xark.org/xark#name-first",
							"value": "Marie"
						},
						{
							"type": "http://www.xark.org/xark#name-last",
							"value": "Laycock"
						},
						{
							"type": "http://www.xark.org/xark#digitized-from",
							"value": 2
						},
						{
							"type": "http://www.xark.org/xark#pictured",
							"value": true,
							"position": { "frame": 1, "top": 0, "left": 50, "bottom": 25, "right": 90 }
						}
					]
				},
				{
					"type": "https://xark.org/xark#person",
					"claims": [
						{
							"type": "http://www.xark.org/xark#name-first",
							"value": "James"
						},
						{
							"type": "http://www.xark.org/xark#name-last",
							"value": "Laycock"
						},
						{
							"type": "http://www.xark.org/xark#pictured",
							"value": true,
							"position": { "frame": 1, "top": 20, "left": 30, "bottom": 70, "right": 90 }
						}
					]
				},
				{
					"type": "https://xark.org/xark#person",
					"claims": [
						{
							"type": "http://www.xark.org/xark#name-first",
							"value": "James"
						},
						{
							"type": "http://www.xark.org/xark#name-last",
							"value": "Laycock"
						},
						{
							"type": "http://www.xark.org/xark#name-middle",
							"value": "Neal"
						},
						{
							"type": "http://www.xark.org/xark#pictured",
							"value": true,
							"position": { "frame": 1, "top": 45, "right": 50, "bottom": 70, "right": 80 }
						}
					]
				}
			]
		}
	]
}
```

So, what about the photograph itself? We know the `Artifact` represents a photograph, but otherwise we have no information here about -- URL, when it was taken, etc.

Each "incarnation" (physical or digital) of this photograph is also a `Subject`. Here, we have three `Subjects`: the physical photographic print sitting in my family archives, my _scan_ of the front of the photo, and my _scan_ of the reverse side. Each of these can have their own `Claims`. So, let's add those (omitting the people for brevity):

```json
{
	"id": 1,
	"revisionId": 1,
	"artifacts": [
		{
			"type": "https://xark.org/xark#photograph",
			"subjects": [
				{
					"id": 20,
					"type": "https://xark.org/xark#photograph-film",
					"claims": [
						{
							"type": "http://www.xark.org/xark#date-created",
							"value": "1925-26~",
							"veracity": "Probably True"
						},
						{
							"type": "http://www.xark.org/xark#frames",
							"value": "2"
						}
					]
				},
				{
					"type": "https://xark.org/xark#photograph-scan",
					"claims": [
						{
							"type": "http://www.xark.org/xark#url",
							"value": "https://xark.org/1925c-xx-xx-003-front.jpg"
						},
						{
							"type": "http://www.xark.org/xark#date-scanned",
							"value": "2020-11-25T054800Z"
						},
						{
							"type": "http://www.xark.org/xark#digitized-from",
							"value": 20
						},
						{
							"type": "http://www.xark.org/xark#pictured",
							"value": true,
							"position": { "frame": 1, "top": 0, "left": 0, "bottom": 100, "right": 100 }
						}
					]
				},
				{
					"type": "https://xark.org/xark#photograph-scan",
					"claims": [
						{
							"type": "http://www.xark.org/xark#url",
							"value": "https://xark.org/1925c-xx-xx-003-reverse.jpg"
						},
						{
							"type": "http://www.xark.org/xark#date-scanned",
							"value": "2020-11-25T055100Z"
						},
						{
							"type": "http://www.xark.org/xark#digitized-from",
							"value": 20
						},
						{
							"type": "http://www.xark.org/xark#pictured",
							"value": true,
							"position": { "frame": 2, "top": 0, "left": 0, "bottom": 100, "right": 100 }
						}
					]
				}
			]
		}
	]
}
```

The original film has a `Claim` of when it was taken. This wasn't clearly present on the photograph, so there is some uncertainty (documented with the `Veracity` property). Generally, we want to base our claims on the information shown directly on the artifact, but this is one of those situations where a researcher can make a reasonable guess based on their outside knowledge, provided they document that level of veracity, and ideally, how they arrived at that claim.

In this case, I know my family lived in East Tennessee, and given their clothing and the climate there, this appears to have been taken during the summer. I also know from other sources that `James Neal Laycock` (the only person of that name known, and known to be the brother of Marie and the son of James) only lived from September 1924 to June 1926. He appears to be about a year old here, so I'm reasonably confident this photograph was taken in the summer of 1925. Since I'm using EDTF for the date, I can clearly indicate that the year is all but certain, but the season is uncertain -- perhaps it was a warm spring, or Marie simply doesn't care about having cold feet. There will always be uncertainty, so provided we document our leaps of logic, we (or those who come after us) can make corrections if new information comes to light.

I only included `Claims` for the artifact location of each person for their "frame 1" location -- the front of the photo. I could have also added claims showing the image location of the boxes containing their names. I could have also been _really_ pedantic and create separate Subjects for the pictured people and the named people, and documented the logical links between them. In this case, I felt very confident in assigning names to faces, so I chose to not go that far. In photographs without unclear or incomplete labels, it may be more beneficial to do so.

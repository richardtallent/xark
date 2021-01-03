module.exports = {
	title: "XARK",
	description: "eXtensible Archival Record Knowledgebase",
	lastUpdated: "Last Updated",
	themeConfig: {
		repo: "richardtallent/xark",
		sidebar: [
			"/",
			"/about",
			{
				title: "File Formats",
				collapsable: false,
				children: [["/format", "General"], "/format-json", "/format-xmp"],
			},
			{
				title: "Technical Resources",
				collapsable: false,
				children: ["/owl"],
			},
			{
				title: "Examples",
				collapsable: false,
				children: ["/example-photo"],
			},
			{
				title: "Structure",
				collapsable: false,
				children: ["/artifacts", "/subjects", "/claims", "/notes", "/events"],
			},
			{
				title: "Value Types",
				collapsable: false,
				children: ["types/basic", "/types/id", "/types/date", "types/uri", "/types/position"],
			},
			"/compatibility",
			"/history",
		],
	},
	markdown: {
		code_blocks: false,
	},
}

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
				children: ["/artifacts", "/subjects", "/claims", "/notes", "/events", "/value-types"],
			},
			"/compatibility",
			"/history",
		],
	},
	markdown: {
		code_blocks: false,
	},
}

module.exports = {
	title: "XARK",
	description: "eXtensible Archival Record Knowledgebase",
	lastUpdated: "Last Updated",
	themeConfig: {
		sidebar: [
			"/",
			"/about",
			"/file-format",
			{
				title: "Technical Resources",
				collapsable: false,
				children: ["/typescript", "/owl"],
			},
			{
				title: "Structure",
				collapsable: false,
				children: ["/artifacts", "/subjects", "/claims", "/events"],
			},
			"/compatibility",
			"/history",
		],
	},
};


exports.seed = async function(knex) {
 await knex("task").insert([
	{ actionItem: "sleep", project_id: 1 },
		{ actionItem: "travel", project_id: 2 },
		{ actionItem: "pay bills", project_id: 2 },
		{ actionItem: "pray God", project_id: 2 },
		{ actionItem: "lease building", project_id: 1 },
		{ actionItem: "send email", project_id: 1 },
		{ actionItem: "wake up", project_id: 1 },
		{ actionItem: "learn vba", project_id: 2 },
		{ actionItem: "learn 3d maps", project_id: 2 },
		{ actionItem: "learn SOP", project_id: 2 },
		{ actionItem: "Learn python", project_id: 2 },

 ])
};

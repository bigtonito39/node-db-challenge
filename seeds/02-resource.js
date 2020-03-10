
exports.seed = async function(knex) {
 await knex("resource").insert([

    { name: "computer" }, 
		{ name: "Docking station" }, 
		{ name: "Calculator" }, 
		{ name: "folders" },
		{ name: "white paper" }, 
		{ name: "pens" }, 
		{ name: "pencils" }, 
		{ name: "monitors" },
		{ name: "camera" },
		{ name: "laptop" },
 ])
};

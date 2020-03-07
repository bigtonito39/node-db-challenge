
exports.seed = async function(knex) {
 await knex("projects").insert([
	{ name: "The team map", description: "Make a map for our leaders" },
	{ name: "save the animal", description: "Save animals in extintion"},
 ])
};

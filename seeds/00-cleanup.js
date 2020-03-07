exports.seed = async function(knex) {
	await knex("projects_resources").truncate()
	await knex("task").truncate()
	await knex("resource").truncate()
	await knex("projects").truncate()
}
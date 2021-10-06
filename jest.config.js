/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
	verbose: true,
	transform: {
		"^.+\\.tsx?$": "esbuild-jest",
	},
}

module.exports = config

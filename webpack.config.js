module.exports = {
	entry: "./src/entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
const path = require('path');

const h = require('./config/helpers');

module.exports = (env) => ({
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: h.useFilename(env),
	},
	plugins: h.usePlugins(env),
	devServer: h.useDevServer(env),
});

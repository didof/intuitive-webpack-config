const path = require('path');

// parts
const parts = require('./config/webpack.parts');
const h = require('./config/helpers')

module.exports = (env) => ({
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: env === 'development' ? '[name].js' : '[name].[hash].js',
	},
	plugins: h.usePluginsSet(env),
	devServer: env === 'development' ? parts.devServer() : {},
});

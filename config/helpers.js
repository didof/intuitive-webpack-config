// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

exports.usePluginsSet = (e) => {
	const pluginsSet = {
		development: 'html',
		production: 'html clean',
		values: {
			html: new HtmlWebpackPlugin({
				title: 'Webpack Loading CSS',
			}),
			clean: new CleanWebpackPlugin(),
		},
	};

	const plugins = pluginsSet[e.toString()];
	const arr = plugins.split(' ');
	let message = '[plugins]: ';
	let error = '';

	const outcome = arr
		.map((plugin) => {
			const p = pluginsSet.values[plugin];
			if (!p) {
				error += plugin + ' ';
				return;
			}
			message += plugin + ' '
			return p;
		})
		.filter((plugin) => typeof plugin !== 'undefined');

	console.info(message);
	console.warn('[plugins|error]: ' + (error !== '' ? error : 'none'));
	return outcome;
};

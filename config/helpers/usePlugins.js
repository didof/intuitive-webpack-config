// plugins imports
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// exported function
exports.usePlugins = (e) => {

	// accessible configuration panel
	const pluginsPanel = {
		development: 'html',
		production: 'html clean',
		values: {
			html: new HtmlWebpackPlugin({
				title: 'Webpack Loading CSS',
			}),
			clean: new CleanWebpackPlugin(),
		},
	};

	// business logic
	let message = '[plugins]: ';
	let error = '';

	const plugins = pluginsPanel[e.toString()];
	const arr = plugins.split(' ');

	const outcome = arr
		.map((plugin) => {
			const p = pluginsPanel.values[plugin];
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

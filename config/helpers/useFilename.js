exports.useFilename = (env) => {
	const names = {
		development: '[name].js',
		production: '[name].[hash].js',
	};

	return names[env];
};

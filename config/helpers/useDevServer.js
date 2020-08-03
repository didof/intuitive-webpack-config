const parts = require('../webpack.parts');

exports.useDevServer = (env) => (env == 'development' ? parts.devServer() : {});

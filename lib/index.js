var getPresetEnvProcessor = require('./preset-env-processor'),
	usage = require('./usage'),
	parseOptions = require('./parse-options');

function LessPluginPresetEnv(options) {
	this.options = options;
}

LessPluginPresetEnv.prototype = {
	install: function (less, pluginManager) {
		var PresetEnvProcessor = getPresetEnvProcessor(less);
		pluginManager.addPostProcessor(new PresetEnvProcessor(this.options));
	},
	printUsage: function () {
		usage.printUsage();
	},
	setOptions: function (options) {
		this.options = parseOptions(options);
	},
	minVersion: [2, 0, 0],
};

module.exports = LessPluginPresetEnv;

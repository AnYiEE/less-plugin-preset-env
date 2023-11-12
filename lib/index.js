var getPresetEnvProcessor = require('./preset-env-processor');

function LessPluginPresetEnv(options) {
	this.options = options;
}

LessPluginPresetEnv.prototype = {
	install: function (less, pluginManager) {
		var PresetEnvProcessor = getPresetEnvProcessor(less);
		pluginManager.addPostProcessor(new PresetEnvProcessor(this.options));
	},
	setOptions: function (options) {
		this.options = options;
	},
	minVersion: [2, 0, 0],
};

module.exports = LessPluginPresetEnv;

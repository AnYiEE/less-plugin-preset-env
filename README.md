[![NPM version](https://img.shields.io/npm/v/less-plugin-preset-env.svg)](https://www.npmjs.com/package/less-plugin-preset-env)

# less-plugin-preset-env

Uses `postcss-preset-env` to convert modern css syntax and determine required polyfills after conversion from less.

[![Download stats](https://nodei.co/npm/less-plugin-preset-env.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/less-plugin-preset-env)

## Installation

```bash
pnpm add -D postcss postcss-preset-env less-plugin-preset-env
```

## lessc usage

```bash
lessc file.less --preset-env="browsers"
```

The browsers are a comma seperated list of [browsers as specified with preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#browsers).

## Programmatic usage

```js
var LessPluginPresetEnv = require('less-plugin-preset-env'); // or
// import LessPluginPresetEnv from 'less-plugin-preset-env';

/** @see https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env#options */
var options = {};

less.render(lessString, { plugins: [new LessPluginAutoPrefix(options)] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.

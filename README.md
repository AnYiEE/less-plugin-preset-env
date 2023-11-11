[![NPM version](https://badge.fury.io/js/less-plugin-preset-env.svg)](http://badge.fury.io/js/less-plugin-preset-env)

# less-plugin-preset-env

Uses `postcss-preset-env` to convert modern css syntax and determine required polyfills after conversion from less.

## lessc usage

Install..

```
pnpm add -D less-plugin-preset-env
```

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

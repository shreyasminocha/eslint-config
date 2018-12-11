# eslint-config

[![Build status](//img.shields.io/travis/shreyasminocha/eslint-config.svg)](//travis-ci.com/shreyasminocha/eslint-config)
[![Latest version](//img.shields.io/npm/v/eslint-config-shreyasminocha.svg)](//npmjs.com/package/eslint-config-shreyasminocha)

An eslint configuration tailored to my preferences. Extends [`airbnb-base`](//npmjs.com/package/eslint-config-airbnb-base).

## Installation

The following assumes you have [`npm`](//npmjs.com) installed.

### Local installation

```sh
npm install --save-dev eslint-config-shreyasminocha

# Peer dependencies
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import
```

Add the following (or equivalent) to your `.eslintrc.yml` (or equivalent):

```yml
extends: shreyasminocha
```

### Global installation

Replace `--save-dev` with `--global` in [the steps for local installation](#local-installation) and edit the global eslintrc (usually in `~`).

## Usage

See ['Command Line Interface'](//eslint.org/docs/user-guide/command-line-interface) and ['Integrations'](//eslint.org/docs/user-guide/integrations) in [eslint's docs](//eslint.org/docs).

## License

Licensed under the [MIT License](//shreyas.mit-license.org/2018).

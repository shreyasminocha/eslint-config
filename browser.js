const browserConfig = {
    env: { browser: true },

    plugins: ['compat'],

    extends: [
        './index.js',
        'plugin:compat/recommended'
    ],

    rules: {}
};

module.exports = browserConfig;

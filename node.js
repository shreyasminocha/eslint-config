const nodeConfig = {
    env: { node: true },

    plugins: [
        'security',
        'node'
    ],

    extends: [
        'plugin:security/recommended',
        'plugin:node/recommended',
        './index.js'
    ],

    rules: {
        // Babel is everywhere
        'node/no-unsupported-features/es-syntax': 'off',

        // Duplicate of import/no-extraneous-dependencies
        'node/no-extraneous-require': 'off'
    }
};

module.exports = nodeConfig;

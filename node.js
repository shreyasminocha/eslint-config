const nodeConfig = {
    env: { node: true },

    plugins: [
        'security',
        'node'
    ],

    extends: [
        'plugin:security/recommended',
        'plugin:node/recommended'
    ],

    rules: {
        'node/no-unsupported-features/es-syntax': 'off' // Babel is everywhere
    }
};

module.exports = nodeConfig;
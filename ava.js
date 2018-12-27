const avaConfig = {
    plugins: ['ava'],
    extends: 'plugin:ava/recommended',

    rules: {
        'ava/no-cb-test': 'warn',
        'ava/no-skip-assert': 'warn',
        'ava/no-skip-test': 'warn',
        'ava/no-todo-test': 'warn'
    }
};

module.exports = avaConfig;

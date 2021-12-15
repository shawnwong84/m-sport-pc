// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // allow debugger during development
        'vue/no-use-v-if-with-v-for': 'off',
        'require-v-for-key': 'off',
        'no-unused-vars': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
};

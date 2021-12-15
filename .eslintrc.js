module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // 'no-undef':'off',
        // 'no-unused-vars' :'off',
        // 'vue/no-use-v-if-with-v-for' :'off',
        // 'no-dupe-keys' :'off',
        // 'vue/require-v-for-key':'off',
        // 'vue/no-unused-vars':'off'
    },
};

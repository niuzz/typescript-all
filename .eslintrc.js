module.exports = {
    root: true,
    // parser: "babel-eslint",
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        // 'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/react',
    ],
    plugins: ['html', 'vue'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: '999.999.999', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    },
};

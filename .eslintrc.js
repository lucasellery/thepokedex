module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    env: {
    jest: true,
    browser: true
    },
    rules: {
    'react/prefer-stateless-function': [0, { ignorePureComponents: false }],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'react/no-array-index-key': 'off',
    'max-len': 'off',
    'spaced-comment': 'off',
    'linebreak-style': 'off',
    'react/style-prop-object': 0,
    semi: [2, 'never'],
    camelcase: 0,
    'global-require': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'lines-between-class-members': 0,
    'class-methods-use-this': 0,
    },
    globals: {
    fetch: false,
    },
}
module.exports = {
    'extends': [
        'airbnb',
        "plugin:flowtype/recommended"
    ],
    'parser': 'babel-eslint',
    'plugins': [
        'react',
        'flowtype',
    ],
    'rules': {
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-closing-bracket-location': [1, { selfClosing: 'after-props', nonEmpty: 'after-props' }],
        'react/require-default-props': 0,
        'react/jsx-indent-props': [1, 4],
        'react/sort-comp': 0,      
        'import/prefer-default-export': 0,
        'no-shadow': 0,
    },
    'globals': {
        'fetch': true,
    }
};
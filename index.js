'use strict';

module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        './rules/joinbox-custom',
    ],
    plugins: [
        '@stylistic/stylelint-plugin',
        'stylelint-order',
        'stylelint-selector-bem-pattern',
    ],
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],
}

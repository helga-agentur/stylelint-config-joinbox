'use strict';

module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        './rules/joinbox-custom',
    ],
    plugins: [
        'stylelint-order',
        'stylelint-config-rational-order/plugin',
        'stylelint-selector-bem-pattern',
        '@stylistic/stylelint-plugin',
    ],
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],
}

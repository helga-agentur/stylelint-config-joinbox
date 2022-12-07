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
    ],
    overrides: [
        {
            files: ['*.scss', '**/*.scss'],
            customSyntax: 'postcss-scss',
        },
    ],
}

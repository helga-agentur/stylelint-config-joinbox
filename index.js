'use strict';

module.exports = {
    extends: [
        'stylelint-config-recommended-scss',
        './rules/joinbox-custom',
    ],
    plugins: [
        'stylelint-scss',
        'stylelint-order',
        'stylelint-config-rational-order/plugin',
        'stylelint-selector-bem-pattern',
    ],
}
module.exports = {
    rules: {
        'plugin/selector-bem-pattern': {
            componentName: '[A-Z]+',
            componentSelectors: {
                initial: '^\\.{componentName}(?:-[a-z]+)?$',
                combined: '^\\.combined-{componentName}-[a-z]+$',
            },
            utilitySelectors: '^\\.u-[a-z]+$',
        },
        'at-rule-empty-line-before': [
            'always',
            {
                ignoreAtRules: [ 'else', 'extend', 'include' ],
                except: ['blockless-after-same-name-blockless'],
                ignore: ['after-comment']
            },
        ],
        'block-opening-brace-space-before': 'always',
        'block-closing-brace-newline-after': [
            'always', {
                ignoreAtRules: [ 'if', 'else' ],
            },
        ],
        'at-rule-name-space-after': [
            'always', {
                ignoreAtRules: [ 'include', 'extend' ],
            },
        ],
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'rule-empty-line-before': [
            'always',
            {
                except: [ 'after-single-line-comment' ],
                ignore: [ 'first-nested' ],
            },
        ],
        'selector-pseudo-element-colon-notation': 'double',
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'block-no-empty': null,
        'unit-whitelist': [ 'em', 'rem', 'px', 'vw', 'vh', 'fr', 'ms', 's', '%', 'grad', 'deg', 'rad', 'turn' ],
        indentation: [
            4,
            {
                indentClosingBrace: false,
                ignore: [ 'inside-parens' ],
            },
        ],
        'color-no-invalid-hex': true,
        'color-hex-case': 'lower',
        'order/properties-order': [],
        'plugin/rational-order': [
            true,
            {
                'border-in-box-model': false,
                'empty-line-between-groups': false,
            },
        ],
        'no-descending-specificity': null,
    },
};

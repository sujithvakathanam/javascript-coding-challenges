module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules : {
    // Possible errors
    'getter-return'            : 2,
    'no-await-in-loop'         : 0,
    'no-compare-neg-zero'      : 2,
    'no-cond-assign'           : 2,
    'no-console'               : 0,
    'no-constant-condition'    : 2,
    'no-control-regex'         : 2,
    'no-debugger'              : 2,
    'no-dupe-args'             : 2,
    'no-dupe-keys'             : 2,
    'no-duplicate-case'        : 2,
    'no-empty'                 : 2,
    'no-empty-character-class' : 2,
    'no-ex-assign'             : 2,
    'no-extra-boolean-cast'    : 2,
    'no-extra-parens'          : ['error', 'all', {
      enforceForArrowConditionals : false,
      ignoreJSX                   : 'all'
    }],
    'no-extra-semi'               : 2,
    'no-func-assign'              : 2,
    'no-inner-declarations'       : 2,
    'no-invalid-regexp'           : 2,
    'no-irregular-whitespace'     : 2,
    'no-obj-calls'                : 2,
    'no-prototype-builtins'       : 2,
    'no-regex-spaces'             : 2,
    'no-sparse-arrays'            : 2,
    'no-template-curly-in-string' : 2,
    'no-unexpected-multiline'     : 2,
    'no-unreachable'              : 2,
    'no-unsafe-finally'           : 2,
    'no-unsafe-negation'          : 2,
    'use-isnan'                   : 2,
    'valid-jsdoc'                 : 'off',
    'valid-typeof'                : 2,

    // Best practices
    'accessor-pairs'         : 2,
    'array-callback-return'  : 2,
    'block-scoped-var'       : 2,
    'class-methods-use-this' : 0,
    complexity               : ['error', 5],
    'consistent-return'      : 2,
    curly                    : 2,
    'default-case'           : 2,
    'dot-location'           : ['error', 'property'],
    'dot-notation'           : 2,
    eqeqeq                   : 2,
    'guard-for-in'           : 2,
    'no-alert'               : 2,
    'no-caller'              : 2,
    'no-case-declarations'   : 2,
    'no-div-regex'           : 2,
    'no-else-return'         : 2,
    'no-empty-function'      : 2,
    'no-empty-pattern'       : 2,
    'no-eq-null'             : 2,
    'no-eval'                : 2,
    'no-extend-native'       : 2,
    'no-extra-bind'          : 2,
    'no-extra-label'         : 2,
    'no-fallthrough'         : 2,
    'no-floating-decimal'    : 2,
    'no-global-assign'       : 2,
    'no-implicit-coercion'   : 2,
    'no-implicit-globals'    : 2,
    'no-implied-eval'        : 2,
    'no-invalid-this'        : 0,
    'no-iterator'            : 2,
    'no-labels'              : 2,
    'no-lone-blocks'         : 2,
    'no-loop-func'           : 2,
    /*    'no-magic-numbers'       : ['error', {
      ignoreArrayIndexes : true,
      ignore             : [-1, 0, 1, 2]
    }],*/
    'no-multi-spaces'                     : 1,
    'no-multi-str'                        : 1,
    'no-new'                              : 2,
    'no-new-func'                         : 2,
    'no-new-wrappers'                     : 2,
    'no-octal'                            : 2,
    'no-octal-escape'                     : 2,
    'no-param-reassign'                   : 2,
    'no-proto'                            : 2,
    'no-redeclare'                        : 2,
    'no-restricted-properties'            : 2,
    'no-return-assign'                    : 2,
    'no-return-await'                     : 2,
    'no-script-url'                       : 2,
    'no-self-assign'                      : 2,
    'no-self-compare'                     : 2,
    'no-sequences'                        : 2,
    'no-throw-literal'                    : 2,
    'no-unmodified-loop-condition'        : 2,
    'no-unused-expressions'               : 0,
    'chai-friendly/no-unused-expressions' : 0,
    'no-unused-labels'                    : 2,
    'no-useless-call'                     : 2,
    'no-useless-concat'                   : 2,
    'no-useless-escape'                   : 2,
    'no-useless-return'                   : 2,
    'no-void'                             : 2,
    'no-warning-comments'                 : 2,
    'no-with'                             : 2,
    'prefer-promise-reject-errors'        : 2,
    radix                                 : 2,
    'require-await'                       : 2,
    'vars-on-top'                         : 2,
    'wrap-iife'                           : 2,
    yoda                                  : 2,

    // Variables
    'init-declarations'          : 2,
    'no-catch-shadow'            : 2,
    'no-delete-var'              : 2,
    'no-label-var'               : 2,
    'no-restricted-globals'      : 2,
    'no-shadow'                  : 2,
    'no-shadow-restricted-names' : 2,
    'no-undef'                   : 0,
    'no-undef-init'              : 2,
    'no-undefined'               : 0,
    'no-unused-vars'             : 2,
    'no-use-before-define'       : 2,

    // Stylistic Issues
    'array-bracket-newline' : ['error', 'consistent'],
    'array-bracket-spacing' : 2,
    'array-element-newline' : 0,
    'block-spacing'         : 2,
    'brace-style'           : ['error', '1tbs'],
    camelcase               : 2,
    'capitalized-comments'  : 2,
    'comma-dangle'          : ['error', 'never'],
    'comma-spacing'         : ['error', {
      before : false,
      after  : true
    }],
    'comma-style'               : ['error', 'last'],
    'computed-property-spacing' : ['error', 'never'],
    'consistent-this'           : 2,
    'eol-last'                  : 2,
    'func-call-spacing'         : 2,
    'func-name-matching'        : 2,
    'func-names'                : 2,
    'id-blacklist'              : 0,
    'id-length'                 : ['error', {
      min        : 2,
      exceptions : ['_']
    }],

    // 'func-style'                : ?,
    // 'id-match'                  : ?,

    'implicit-arrow-linebreak' : ['error', 'beside'],
    indent                     : ['error', 2, {SwitchCase : 1}],
    'jsx-quotes'               : ['error', 'prefer-double'],
    'key-spacing'              : ['error', {
      align : {
        beforeColon : true,
        afterColon  : true,
        on          : 'colon',
        mode        : 'strict'
      },
      multiLine : {
        beforeColon : true,
        afterColon  : true
      },
      singleLine : {
        beforeColon : true,
        afterColon  : true
      }
    }],
    'keyword-spacing' : ['error', {
      before : true,
      after  : true
    }],
/*    'line-comment-position' : ['error', {
      position : 'above'
    }],*/
    'lines-around-comment' : ['error', {
      beforeBlockComment : true,
      afterBlockComment  : false,
      beforeLineComment  : true,
      afterLineComment   : false,
      allowBlockStart    : true,
      allowBlockEnd      : false,
      allowObjectStart   : true,
      allowObjectEnd     : false,
      allowArrayStart    : true,
      allowArrayEnd      : false
    }],
    'lines-between-class-members' : ['error', 'always'],
    'max-depth'                   : ['error', 4],
    'max-len'                     : ['error', 280],
    'max-lines'                   : ['error', {
      max            : 500,
      skipBlankLines : true,
      skipComments   : true
    }],
    'max-nested-callbacks'    : ['error', 5],
    'max-params'              : ['error', 4],
    'max-statements'          : ['error', 45],
    'max-statements-per-line' : ['error', {
      max : 1
    }],
    'multiline-comment-style' : ['error', 'starred-block'],
    'multiline-ternary'       : ['error', 'never'],
    'new-cap'                 : ['error', {
      newIsCap   : true,
      capIsNew   : true,
      properties : true
    }],
    'new-parens'               : 2,
    'newline-before-return'    : 2,
    'newline-per-chained-call' : 2,
    'no-array-constructor'     : 2,
    'no-bitwise'               : 2,
    'no-continue'              : 1,
    'no-inline-comments'       : 0,
    'no-lonely-if'             : 2,
    'no-mixed-spaces-and-tabs' : 2,
    'no-multi-assign'          : 2,
    'no-multiple-empty-lines'  : 2,
    'no-negated-condition'     : 2,
    'no-nested-ternary'        : 2,
    'no-new-object'            : 2,
    'no-plusplus'              : 2,

    'no-tabs'                          : 2,
    'no-trailing-spaces'               : 2,
    'no-underscore-dangle'             : 2,
    'no-unneeded-ternary'              : 2,
    'no-whitespace-before-property'    : 2,
    'nonblock-statement-body-position' : ['error', 'below'],
    'object-curly-newline'             : ['error', {
      consistent : true
    }],
    'object-curly-spacing' : ['error', 'never', {
      arraysInObjects  : false,
      objectsInObjects : false
    }],
    'object-property-newline' : 2,
    'one-var'                 : ['error', {
      var   : 'always',
      const : 'never',
      let   : 'never'
    }],
    'one-var-declaration-per-line' : ['error', 'always'],
    'operator-assignment'          : ['error', 'always'],
    'operator-linebreak'           : ['error', 'none', {
      overrides : {
        '&&' : 'before',
        '||' : 'before'
      }
    }],
    'padded-blocks'                   : ['error', 'never'],
    'padding-line-between-statements' : ['error',
      {blankLine : 'always', prev : '*', next : 'return'},
      {blankLine : 'always', prev : '*', next : 'class'},
      {blankLine : 'always', prev : '*', next : 'default'},
      {blankLine : 'always', prev : '*', next : 'function'},
      {blankLine : 'any', prev : ['let', 'const'], next : ['let', 'const']}
    ],
    'quote-props'   : ['error', 'as-needed'],
    quotes          : ['error', 'single'],
    semi            : ['error', 'always'],
    'semi-spacing'  : ['error', {
      before : false,
      after  : true
    }],
    'semi-style' : ['error', 'last'],

    'space-before-blocks'         : ['error', 'always'],
    'space-before-function-paren' : ['error', 'always'],
    'space-in-parens'             : ['error', 'never'],
    'space-infix-ops'             : ['error', {
      int32Hint : false
    }],
    'space-unary-ops'      : 2,
    'spaced-comment'       : ['error', 'always'],
    'switch-colon-spacing' : ['error', {
      after  : true,
      before : false
    }],
    'template-tag-spacing' : ['error', 'never'],

    // ECMAScript 6
    'arrow-body-style' : ['error', 'as-needed'],
    'arrow-parens'     : ['error', 'as-needed'],
    'arrow-spacing'    : ['error', {
      before : true,
      after  : true
    }],
    'constructor-super'      : 2,
    'generator-star-spacing' : ['error', 'after'],
    'no-class-assign'        : 2,
    'no-confusing-arrow'     : ['error', {allowParens : true}],
    'no-const-assign'        : 2,
    'no-dupe-class-members'  : 2,
    'no-duplicate-imports'   : 2,
    'no-new-symbol'          : 2,

    'no-this-before-super'    : 2,
    'no-useless-computed-key' : 2,
    'no-useless-constructor'  : 2,
    'no-useless-rename'       : 2,
    'object-shorthand'        : 2,
    'prefer-const'            : 2,
    'prefer-rest-params'      : 2,
    'prefer-template'         : 2,
    'no-var'                  : 2,
    'prefer-spread'           : 2,
    'function-paren-newline'  : ['error', 'multiline'],
    'prefer-arrow-callback'   : ['error', {
      allowNamedFunctions : true
    }],

    'require-yield'          : 2,
    'rest-spread-spacing'    : ['error', 'never'],
    'symbol-description'     : 2,
    'template-curly-spacing' : ['error', 'never'],
    'yield-star-spacing'     : ['error', 'after']
  }
}

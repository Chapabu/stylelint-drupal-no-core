const testRule = require('stylelint-test-rule-tape');
const fieldRule = require('./fields.rule');

testRule(fieldRule.rule, {
  ruleName: fieldRule.ruleName,
  config: null,
  skipBasicChecks: true,
  reject: [
    {
      code: '.field--field_image {}',
      message: `Drupal core field names are discouraged. (${fieldRule.ruleName})`,
      line: 1,
      column: 1,
    },
  ],
});

const { createPlugin, utils } = require('stylelint');

const ruleName = 'drupal-no-core/fields';
const messages = utils.ruleMessages(ruleName, {
  expected: 'Drupal core field names are discouraged.',
});

const plugin = createPlugin(ruleName, (primaryOpts, secondaryOpts) => {
  return (root, result) => {
    root.walkRules(rule => {
      if (rule.selector.match(/field--/)) {
        utils.report({
          ruleName,
          message: messages.expected,
          result,
          node: rule.parent,
          line: rule.source.start.line,
          column: rule.source.start.column,
        });
      }
    });
  };
});

plugin.ruleName = ruleName;
plugin.messages = messages;

module.exports = plugin;

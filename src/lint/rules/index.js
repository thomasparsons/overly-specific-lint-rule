const componentNamingRule = require("./componentNaming")

module.exports.rules = {
  componentNaming: (context) => componentNamingRule(context),
}

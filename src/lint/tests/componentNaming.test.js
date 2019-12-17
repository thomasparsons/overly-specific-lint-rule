const RuleTester = require("eslint").RuleTester // eslint-disable-line
const lib = require("../rules")

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
})

const ruleTester = new RuleTester()

ruleTester.run("componentNaming", lib.rules.componentNaming, {
  valid: [
    {
      code: "class HelloWorld extends Component { render() { return ( <h1>hello world!</h1> ) }}",
      options: [],
    }, {
      code: "class HelloWorld extends Component { render() { return ( <h1>hello world!</h1> ) }}",
      options: [{ minNoOfWords: 2 }],
    }, {
      code: "class Hello extends Component { render() { return ( <h1>hello world!</h1> ) }}",
      options: [{ minNoOfWords: 1 }],
    },
  ],

  invalid: [
    {
      code: "class Hello extends Component { render() { return ( <h1>hello world!</h1> ) }}",
      options: [],
      errors: [{
        message: "class name is too short",
        type: "ClassDeclaration",
      }],
    }, {
      code: "class HelloWorld extends Component { render() { return ( <h1>hello world!</h1> ) }}",
      options: [{ minNoOfWords: 3 }],
      errors: [{
        message: "class name is too short",
        type: "ClassDeclaration",
      }],
    }, {
      code: "class HelloWorldHi extends Component { render() { return ( <h1>hello world!</h1> ) }}",
      options: [{ minNoOfWords: 4 }],
      errors: [{
        message: "class name is too short",
        type: "ClassDeclaration",
      }],
    },
  ],
})

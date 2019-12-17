
const testClassName = (context, node, options) => {
  if (node.type !== "ClassDeclaration") { return false }

  const { name } = node.id
  const nameVariables = name.split(/(?=[A-Z])/)

  const { minNoOfWords = 2 } = options

  if (nameVariables.length >= minNoOfWords) {
    return false
  }

  context.report({
    message: "class name is too short",
    node,
  })

  return true
}

const componentNaming = (context) => {
  const options = context.options.length ? context.options[0] : {}

  return {
    ClassDeclaration(node) {
      testClassName(context, node, options)
    },
  }
}

module.exports = componentNaming

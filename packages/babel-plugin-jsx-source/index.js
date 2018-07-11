module.exports = ({ types: t }) => {
  const visitor = {
    ExportDefaultDeclaration(path) {
      const file = path.hub.file
      const comments = file.ast.comments
      const len = comments.length
      let startComment = 0
      let endComment = 0

      for (let i = 0; i < len; i += 1) {
        const comment = comments[i]

        if (comment.value.trim() === 'sourceCode:start') {
          startComment = startComment || comment.loc.start.line
        } else if (comment.value.trim() === 'sourceCode:end') {
          endComment = comment.loc.end.line
        }
      }

      if (startComment < 1 || endComment < 1) return

      const codeStr = file.code
      const sourceCode = codeStr
        .split('\n')
        .slice(startComment, endComment - 1)
        .join('\n')

      const nodeName = path.node.declaration.name
      const expr = t.assignmentExpression(
        '=',
        t.identifier(`${nodeName}._sourceCode`),
        t.identifier(JSON.stringify(sourceCode)) // 将sourceCode的值作为字符串赋给_sourceCode
      )

      path.insertBefore(t.expressionStatement(expr))
    },
  }

  return { visitor }
}

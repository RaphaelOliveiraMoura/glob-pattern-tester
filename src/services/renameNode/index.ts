import Node from 'interfaces/Node'

interface addNodeProps {
  nodeTree: Node
  path: string
  nameToUpdate: string
}

function splitAndReverseString(array: string): string {
  return array.split('/').reverse().join('/')
}

export default function renameNode({
  nodeTree,
  path,
  nameToUpdate
}: addNodeProps): void {
  if (nodeTree.path === path) {
    const nameRegex = new RegExp(nodeTree.name, 'gi')

    nodeTree.path = splitAndReverseString(
      splitAndReverseString(nodeTree.path).replace(nameRegex, nameToUpdate)
    )

    nodeTree.name = nameToUpdate
    return
  }

  if (!nodeTree.childrens) {
    return
  }

  nodeTree.childrens.forEach((children) =>
    renameNode({ nodeTree: children, path, nameToUpdate })
  )
}

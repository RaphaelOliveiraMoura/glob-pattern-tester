import Node from 'interfaces/Node'

interface addNodeProps {
  nodeTree: Node
  path: string
}

export default function removeNode({ nodeTree, path }: addNodeProps): boolean {
  if (nodeTree.path === path) {
    return true
  }

  if (!nodeTree.childrens) {
    return false
  }

  const nodeToRemoveIndex = nodeTree.childrens.findIndex(
    (children) => removeNode({ nodeTree: children, path }) === true
  )

  if (nodeToRemoveIndex >= 0) {
    nodeTree.childrens.splice(nodeToRemoveIndex, 1)
  }

  return false
}

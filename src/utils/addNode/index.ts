import Node from 'interfaces/Node'

interface addNodeProps {
  nodeTree: Node
  nodeToAdd: Node
  path: string
}

export default function addNode({
  nodeTree,
  nodeToAdd,
  path
}: addNodeProps): void {
  if (nodeTree.path === path && nodeTree.type === 'directory') {
    nodeTree.childrens?.push(nodeToAdd)
    return
  }

  if (!nodeTree.childrens) {
    return
  }

  nodeTree.childrens.forEach((children) =>
    addNode({ nodeTree: children, nodeToAdd, path })
  )
}

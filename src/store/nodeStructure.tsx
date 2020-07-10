import React from 'react'

import Node from 'interfaces/Node'

import initialDataRootFolder from 'mock/rootFolder'

import addNodeUtil from 'utils/addNode'
import removeNodeUtil from 'utils/removeNode'
import renameNodeUtil from 'utils/renameNode'

interface NodeStructureProps {
  root: Node
  addNode: (node: Node, path: string) => void
  removeNode: (path: string) => void
  renameNode: (path: string, newName: string) => void
}

export const NodeStructure = React.createContext<NodeStructureProps>(
  {} as NodeStructureProps
)

export const NodeStructureProvider: React.FC = ({ children }) => {
  const [root, setRoot] = React.useState<Node>(initialDataRootFolder)

  const addNode = React.useCallback(
    (node: Node, path: string) => {
      const draft = { ...root }
      addNodeUtil({ nodeTree: root, nodeToAdd: node, path })
      setRoot(draft)
    },
    [root]
  )

  const removeNode = React.useCallback(
    (path: string) => {
      const draft = { ...root }
      removeNodeUtil({ nodeTree: root, path })
      setRoot(draft)
    },
    [root]
  )

  const renameNode = React.useCallback(
    (path: string, newName: string) => {
      const draft = { ...root }
      renameNodeUtil({ nodeTree: root, path, nameToUpdate: newName })
      setRoot(draft)
    },
    [root]
  )

  return (
    <NodeStructure.Provider value={{ root, addNode, removeNode, renameNode }}>
      {children}
    </NodeStructure.Provider>
  )
}

export const useNodeStructure = (): NodeStructureProps =>
  React.useContext(NodeStructure)

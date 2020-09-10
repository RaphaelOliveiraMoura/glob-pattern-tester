import React from 'react'

import Node from 'interfaces/Node'

import initialDataRootFolder from 'mock/rootFolder'

import addNodeUtil from 'services/addNode'
import removeNodeUtil from 'services/removeNode'
import renameNodeUtil from 'services/renameNode'

interface AddNodeParams {
  name: string
  path: string
  type: 'directory' | 'file'
}

interface NodeStructureProps {
  root: Node
  addNode: (params: AddNodeParams) => void
  removeNode: (path: string) => void
  renameNode: (path: string, newName: string) => void
}

export const NodeStructure = React.createContext<NodeStructureProps>(
  {} as NodeStructureProps
)

export const NodeStructureProvider: React.FC = ({ children }) => {
  const [root, setRoot] = React.useState<Node>(initialDataRootFolder)

  const addNode = React.useCallback(
    ({ name, path, type }: AddNodeParams) => {
      const nodePath = `${path}/${name}`
      const node: Node = { name, path: nodePath, type, childrens: [] }

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

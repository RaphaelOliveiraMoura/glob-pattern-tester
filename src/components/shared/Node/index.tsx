import React from 'react'
import minimatch from 'minimatch'
import { BsFileEarmark, BsFolder } from 'react-icons/bs'

import * as S from './styles'

import Node from 'interfaces/Node'

import { useNodeStructure } from 'store/nodeStructure'

interface NodeComponentProps {
  node: Node
  globPattern: string
  depth?: number
  selectedFolderPath: string | null
  setSelectedFolderPath: (path: string | null) => void
}

const icons = {
  directory: BsFolder,
  file: BsFileEarmark
}

const NodeComponent: React.FC<NodeComponentProps> = ({
  node,
  globPattern,
  depth = 0,
  selectedFolderPath,
  setSelectedFolderPath
}) => {
  const inputRef = React.useRef<HTMLSpanElement>(null)

  const fileMatchWithGlobPattern =
    node.type === 'file' &&
    minimatch(node.path, globPattern, {
      dot: true
    })

  const folderFocused =
    node.type === 'directory' && node.path === selectedFolderPath

  const Icon = icons[node.type]

  const { renameNode, removeNode } = useNodeStructure()

  const handleBlur = () => {
    if (inputRef.current) {
      const textValue = inputRef.current.innerText
      if (textValue === '') {
        removeNode(node.path)
      } else {
        renameNode(node.path, textValue)
      }
    }
  }

  const onFolderFocus = (path: string) => {
    if (node.type === 'directory') {
      setSelectedFolderPath(path)
    }
  }

  const onFolderBlur = () => {
    if (node.type === 'directory') {
      setSelectedFolderPath(null)
    }
  }

  const getIconColor = () => {
    if (fileMatchWithGlobPattern) return '#82D11D'
    if (folderFocused) return '#a5a5a5e0'
    return '#fff'
  }

  return (
    <S.Container>
      <S.NodeItem
        matchGlob={fileMatchWithGlobPattern}
        depth={depth}
        onBlur={onFolderBlur}
        folderFocused={folderFocused}
        onClick={() => onFolderFocus(node.path)}
        isFolder={node.type === 'directory'}
      >
        <Icon color={getIconColor()} />
        <span
          ref={inputRef}
          role="input"
          autoCorrect="off"
          spellCheck="false"
          onBlur={handleBlur}
          contentEditable={node.type === 'file'}
          suppressContentEditableWarning
        >
          {node.name}
        </span>
      </S.NodeItem>
      {node.childrens &&
        node.childrens.map((children) => (
          <NodeComponent
            key={children.name}
            node={children}
            globPattern={globPattern}
            depth={depth + 1}
            selectedFolderPath={selectedFolderPath}
            setSelectedFolderPath={setSelectedFolderPath}
          />
        ))}
    </S.Container>
  )
}
export default NodeComponent

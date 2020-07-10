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
}

const icons = {
  directory: BsFolder,
  file: BsFileEarmark
}

const NodeComponent: React.FC<NodeComponentProps> = ({
  node,
  globPattern,
  depth = 0
}) => {
  const inputRef = React.useRef<HTMLSpanElement>(null)

  const fileMatchWithGlobPattern =
    node.type === 'file' &&
    minimatch(node.path, globPattern, {
      dot: true
    })

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

  return (
    <S.Container>
      <S.NodeItem matchGlob={fileMatchWithGlobPattern} depth={depth}>
        <Icon color={fileMatchWithGlobPattern ? '#82D11D' : '#fff'} />
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
          />
        ))}
    </S.Container>
  )
}
export default NodeComponent

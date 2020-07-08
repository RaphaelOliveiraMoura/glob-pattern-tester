import React from 'react'
import minimatch from 'minimatch'
import { BsFileEarmark, BsFolder } from 'react-icons/bs'

import * as S from './styles'

import Node from 'interfaces/Node'

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
  const fileMatchWithGlobPattern =
    node.type === 'file' &&
    minimatch(node.path, globPattern, {
      dot: true
    })

  const Icon = icons[node.type]

  return (
    <S.Container>
      <S.NodeItem matchGlob={fileMatchWithGlobPattern} depth={depth}>
        <Icon color={fileMatchWithGlobPattern ? '#82D11D' : '#fff'} />
        <strong>{node.name}</strong>
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

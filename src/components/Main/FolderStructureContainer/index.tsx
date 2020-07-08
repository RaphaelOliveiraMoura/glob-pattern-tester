import React from 'react'

import { BsFileEarmarkPlus, BsFolderPlus } from 'react-icons/bs'

import * as S from './styles'

import Node from 'components/shared/Node'

import mockRootFolder from 'mock/rootFolder'

interface FolderStructureContainerProps {
  globPattern: string
}

const FolderStructureContainer: React.FC<FolderStructureContainerProps> = ({
  globPattern
}) => {
  return (
    <S.Container>
      <header style={{ display: 'none' }}>
        <BsFileEarmarkPlus /> <BsFolderPlus />
      </header>

      <Node node={mockRootFolder} globPattern={globPattern} />
    </S.Container>
  )
}

export default FolderStructureContainer

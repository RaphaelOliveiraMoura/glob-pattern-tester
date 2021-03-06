import React from 'react'

import { BsFileEarmarkPlus, BsFolderPlus } from 'react-icons/bs'

import * as S from './styles'

import Node from 'components/shared/Node'

import { useNodeStructure } from 'store/nodeStructure'

interface FolderStructureContainerProps {
  globPattern: string
  selectedFolderPath: string | null
  setSelectedFolderPath: (path: string | null) => void
}

const FolderStructureContainer: React.FC<FolderStructureContainerProps> = ({
  globPattern,
  selectedFolderPath,
  setSelectedFolderPath
}) => {
  const { root, addNode } = useNodeStructure()

  return (
    <S.Container>
      <header>
        <BsFileEarmarkPlus
          size={24}
          color="#fff"
          onClick={() =>
            addNode({
              name: 'new_file.js',
              type: 'file',
              path: selectedFolderPath || root.path
            })
          }
        />
        <BsFolderPlus size={24} color="#fff" />
      </header>

      <Node
        node={root}
        globPattern={globPattern}
        selectedFolderPath={selectedFolderPath}
        setSelectedFolderPath={setSelectedFolderPath}
      />
    </S.Container>
  )
}

export default FolderStructureContainer

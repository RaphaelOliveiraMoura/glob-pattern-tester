import React from 'react'

import * as S from './styles'

import SearchSidebar from './SearchSidebar'
import FolderStructureContainer from './FolderStructureContainer'

import { NodeStructureProvider } from 'store/nodeStructure'

const Main = () => {
  const [globPattern, setGlobPattern] = React.useState('**/index.ts')

  const [selectedFolderPath, setSelectedFolderPath] = React.useState<
    string | null
  >(null)

  return (
    <NodeStructureProvider>
      <S.Container>
        <SearchSidebar
          globPattern={globPattern}
          setGlobPattern={setGlobPattern}
        />
        <FolderStructureContainer
          globPattern={globPattern}
          selectedFolderPath={selectedFolderPath}
          setSelectedFolderPath={setSelectedFolderPath}
        />
      </S.Container>
    </NodeStructureProvider>
  )
}

export default Main

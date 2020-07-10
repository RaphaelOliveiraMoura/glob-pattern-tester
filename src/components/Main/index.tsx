import React from 'react'

import * as S from './styles'

import SearchSidebar from './SearchSidebar'
import FolderStructureContainer from './FolderStructureContainer'

import { NodeStructureProvider } from 'store/nodeStructure'

const Main = () => {
  const [globPattern, setGlobPattern] = React.useState('**/index.ts')

  return (
    <NodeStructureProvider>
      <S.Container>
        <SearchSidebar
          globPattern={globPattern}
          setGlobPattern={setGlobPattern}
        />
        <FolderStructureContainer globPattern={globPattern} />
      </S.Container>
    </NodeStructureProvider>
  )
}

export default Main

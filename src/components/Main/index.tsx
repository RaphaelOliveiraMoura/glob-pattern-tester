import React from 'react'

import * as S from './styles'

import SearchSidebar from './SearchSidebar'
import FolderStructureContainer from './FolderStructureContainer'

const Main = () => {
  const [globPattern, setGlobPattern] = React.useState('**/index.ts')

  return (
    <S.Container>
      <SearchSidebar
        globPattern={globPattern}
        setGlobPattern={setGlobPattern}
      />
      <FolderStructureContainer globPattern={globPattern} />
    </S.Container>
  )
}

export default Main

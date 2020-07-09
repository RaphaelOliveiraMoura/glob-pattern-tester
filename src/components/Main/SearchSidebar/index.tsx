import React from 'react'

import { AiFillGithub } from 'react-icons/ai'

import * as S from './styles'

import Input from 'components/shared/Input'

interface SearchSidebarProps {
  globPattern: string
  setGlobPattern: (globPattern: string) => void
}

const SearchSidebar: React.FC<SearchSidebarProps> = ({
  globPattern,
  setGlobPattern
}) => {
  return (
    <S.Container>
      <a href="https://github.com/RaphaelOliveiraMoura/glob-pattern-tester">
        <AiFillGithub size={24} />
      </a>
      <h1>Glob Pattern Tester</h1>
      <Input
        value={globPattern}
        onChange={(e) => setGlobPattern(e.target.value)}
      />
      <footer>Made with ️️❤️ by Raphael</footer>
    </S.Container>
  )
}

export default SearchSidebar

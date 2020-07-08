import React from 'react'

import * as S from './styles'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = (props) => {
  return (
    <S.Container>
      <input type="text" autoCorrect="off" autoComplete="off" {...props} />
    </S.Container>
  )
}

export default Input

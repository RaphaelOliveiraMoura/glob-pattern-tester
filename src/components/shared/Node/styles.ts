import styled from 'styled-components'

export const Container = styled.div`
  font-size: 22px;
  color: #444;
`

interface NodeItemProps {
  matchGlob: boolean
  depth: number
}

export const NodeItem = styled.article<NodeItemProps>`
  display: flex;
  align-items: center;

  margin-top: 10px;
  margin-left: ${({ depth }) => `${depth * 30}px`};

  strong {
    margin-left: 4px;
    color: ${({ matchGlob }) => (matchGlob ? '#82D11D' : '#FFFFFF')};
  }
`

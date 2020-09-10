import styled, { css } from 'styled-components'

export const Container = styled.div`
  font-size: 22px;
  color: #444;
`

interface NodeItemProps {
  matchGlob: boolean
  depth: number
  folderFocused: boolean
  isFolder: boolean
}

export const NodeItem = styled.article<NodeItemProps>`
  display: flex;
  align-items: center;

  margin-top: 10px;
  margin-left: ${({ depth }) => `${depth * 30}px`};

  ${({ isFolder }) =>
    isFolder &&
    css`
      & {
        cursor: pointer;
      }
    `}

  span {
    margin-left: 4px;
    background: transparent;
    border: 0;
    font-size: 22px;
    color: ${({ matchGlob }) => (matchGlob ? '#82D11D' : '#FFFFFF')};

    ${({ folderFocused }) =>
      folderFocused &&
      css`
        & {
          color: #a5a5a5e0;
        }
      `}
  }

  span:focus {
    color: #000;
  }
`

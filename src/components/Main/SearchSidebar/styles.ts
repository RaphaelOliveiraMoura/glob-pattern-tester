import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 28px;
    margin-bottom: 26px;
  }

  & > svg {
    position: fixed;
    top: 12px;
    left: 12px;
  }

  footer {
    position: fixed;
    bottom: 12px;
    left: 12px;
  }
`

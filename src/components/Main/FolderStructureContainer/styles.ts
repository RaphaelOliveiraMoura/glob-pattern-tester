import styled from 'styled-components'

export const Container = styled.div`
  background: #2b303a;

  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  header {
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15%;

    svg + svg {
      margin-left: 15px;
    }
  }
`

import styled from "styled-components"

export const Lists = styled.ul`
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  max-width: 100vw;
  overflow-x: scroll;
  gap: 20px;
  margin-top: 15px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 850px) {
    flex-wrap: wrap;
    max-width: 1020px;
  }
`

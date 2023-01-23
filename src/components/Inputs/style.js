import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  @media (min-width: 762px) {
    width: max-content;
  }
`

export const ContainerInput = styled.div`
  width: 90%;
  max-width: 382px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(var(--grey-0), 1);
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  &:hover {
    background-color: rgba(var(--grey-20) 1);
    border: 2px solid #333333;
    color: #828282;
  }
`

export const InputMain = styled.input`
  width: 60%;
  background-color: transparent;
  outline: none;
  border: none;
`

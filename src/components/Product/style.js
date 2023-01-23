import styled from "styled-components"

export const ProductItem = styled.li`
  min-width: 300px;
  min-height: 346px;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  transition: 700ms;
  &:hover {
    border-color: rgba(var(--color-primary), 1);
  }
  figure {
    width: 100%;
    background-color: rgba(var(--grey-0), 1);
  }
  img {
    height: 150px;
    transition: 500ms;
    &:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  .colorPrice {
    color: rgba(var(--color-primary), 1);
  }
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 22px;
    justify-content: space-evenly;
  }
`

import styled from "styled-components"

export const Aside = styled.aside`
  width: 90%;
  max-width: 365px;
  max-height: 530px;
  background-color: rgba(var(--grey-0), 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 26px;
  .text {
    border-radius: 5px 5px 0px 0px;
    color: rgba(255, 255, 255, 1);
    display: flex;
    align-items: center;
    height: 65px;
    width: 100%;
    background-color: rgba(var(--color-primary), 1);
  }
  .cartRender {
    width: 100%;
    max-height: 323px;
    background-color: rgba(var(--grey-0), 1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }
  .ulProducts {
    width: 100%;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .emptyCart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
  .emptyCart > .bagIcon {
    color: rgba(var(--color-primary), 1);
    font-size: 80px;
    transition: 500ms;
    &:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  .info-Price {
    width: 98%;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    border-top: 3px dashed rgba(var(--grey-20), 1);
  }
`

export const ProductRender = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  .imgList {
    width: 30%;
  }
  figure {
    width: 80px;
    height: 80px;
  }
  figure img {
    width: 70px;
    height: 70px;
    background-color: rgba(var(--grey-20), 1);
    border-radius: 5px;
    transition: 500ms;
    &:hover {
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  .infoList {
    width: 80%;
    height: 100%;
    padding-left: 15px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }
  .buttonRemoveItem {
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    //Esse trecho de código foi uma tentativa de animação para o botão que só fica escrito remover (tentei fazer algo chamativo, vou deixar comentado para fins didaticos)
    /* transition: 700ms;
    &:hover {
      transform: translateZ(0);
      backface-visibility: hidden;
      -moz-transform: scale(1.1);
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    } */
  }
`

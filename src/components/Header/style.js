import styled from "styled-components"

export const Headers = styled.div`
  width: 100%;
  height: 139px;
  background-color: rgba(var(--grey-0), 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  img {
    margin-top: 10px;
  }
  @media (min-width: 762px) {
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    img {
      margin-left: 10px;
    }
  }
`

import styled from "styled-components"

export const ButtonPrimary2 = styled.button`
  width: 130px;
  height: 60px;
  background-color: rgba(var(--color-primary), 1);
  border-radius: 8px;
  border: 2px solid #27ae60;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(var(--color-primary-50), 1);
    border: 2px solid #93d7af;
  }
`
export const ButtonGrey2 = styled(ButtonPrimary2)`
  background-color: rgba(var(--grey-20), 1);
  border: 2px solid #e0e0e0;
  color: #828282;
  &:hover {
    background-color: rgba(var(--grey-50), 1);
    border: 2px solid #828282;
    color: #e0e0e0;
  }
`

export const ButtonRemove2 = styled(ButtonPrimary2)`
  width: 100%;
  max-width: 343px;
  margin-top: 12px;
  background-color: rgba(var(--grey-20), 1);
  border: 2px solid #e0e0e0;
  font-family: "Inter", sans-serif;
  color: #828282;
  &:hover {
    background-color: rgba(var(--grey-50), 1);
    border: 2px solid #828282;
    color: #e0e0e0;
  }
`

export const ButtonMidPrimary2 = styled.button`
  width: 130px;
  height: 40px;
  background-color: rgba(var(--color-primary), 1);
  border-radius: 8px;
  border: 2px solid #27ae60;
  font-family: "Inter", sans-serif;
  color: #ffffff;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(var(--color-primary-50), 1);
    border: 2px solid #93d7af;
  }
`

export const ButtonMidGrey2 = styled(ButtonMidPrimary2)`
  background-color: rgba(var(--grey-20), 1);
  border: 2px solid #e0e0e0;
  color: #828282;
  &:hover {
    background-color: rgba(var(--grey-50), 1);
    border: 2px solid #828282;
    color: #e0e0e0;
  }
`

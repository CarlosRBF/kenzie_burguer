import {
  ButtonPrimary2,
  ButtonGrey2,
  ButtonMidPrimary2,
  ButtonMidGrey2,
  ButtonRemove2,
} from "./style"

const ButtonPrimary = ({ text }) => {
  return <ButtonPrimary2>{text}</ButtonPrimary2>
}

const ButtonGrey = ({ text }) => {
  return <ButtonGrey2>{text}</ButtonGrey2>
}

const ButtonMidPrimary = ({ text, onclick }) => {
  return <ButtonMidPrimary2 onClick={onclick}>{text}</ButtonMidPrimary2>
}

const ButtonMidGrey = ({ text, onSubmit }) => {
  return <ButtonMidGrey2 onSubmit={onSubmit}>{text}</ButtonMidGrey2>
}

const ButtonRemoveAll = ({ text, onClick }) => {
  return <ButtonRemove2 onClick={onClick}>{text}</ButtonRemove2>
}

export { ButtonPrimary, ButtonGrey, ButtonMidPrimary, ButtonMidGrey, ButtonRemoveAll }

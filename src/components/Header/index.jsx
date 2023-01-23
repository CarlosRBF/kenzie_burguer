import { Headers } from "./style"
import logo from "../assets/logo/logo.svg"
import Inputs from "../Inputs"


const Header = ({inputText, setInputText}) => {
  return (
    <Headers>
      <img src={logo} alt="Descrição da logo BurguerKenzie" />
      <Inputs inputText={inputText} setInputText={setInputText}/>
    </Headers>
  )
}

export default Header

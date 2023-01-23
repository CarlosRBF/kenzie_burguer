import { ButtonMidPrimary2 } from "../Buttons/style"
import { Container, ContainerInput, InputMain } from "./style"

const Inputs = ({ inputText, setInputText }) => {
  return (
    <Container>
      <ContainerInput>
        <InputMain
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          className="heading5"
          placeholder="Digitar Pesquisa"
        />
        <ButtonMidPrimary2>Pesquisar</ButtonMidPrimary2>
      </ContainerInput>
    </Container>
  )
}

export default Inputs

import TitleComponent from "../Title"
import { Container, Main, Form, Input, TextArea, WrappButton, Button } from "./styles"

export function FormComponent() {
  return (
    <Container>
      <Main>
        <TitleComponent name="Formul&aacute;rio" style={{color: '#000'}}/>
        <Form>
          <Input id="fullname" type="text" placeholder="Nome e Sobrenome" required />
          <Input id="email" type="email" placeholder="Email" required />
          <Input id="tel" type="text" placeholder="Telefone" required />
          <TextArea id="about" placeholder="Observações" required />
          {/* <WrappButton> */}
            <Button type="submit">Enviar</Button>
          {/* </WrappButton> */}
        </Form>
      </Main>
    </Container>
  )
}

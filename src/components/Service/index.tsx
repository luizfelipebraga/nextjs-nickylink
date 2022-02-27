import TitleComponent from "../Title";
import { Container, Subtitle } from "./styles";

export default function ServiceContent() {
  return (
    <Container>
      <TitleComponent number="02." name="Serviços" />
      <Subtitle>
        <p>Não importa quais são as suas <strong><u>demandas</u></strong>, você pode contar com os meus serviços de orientação e ajuda para desenvolver um projeto altamente bem-sucedido.
          Cada serviço é completamente <strong><u>personalizado</u></strong> e implementado de forma cuidadosa e profissional para atender às suas necessidades.
        </p>
      </Subtitle>
    </Container>
  )
}

import TitleComponent from "../Title";
import { Container, Main, Subtitle } from "./styles";
import Fade from 'react-reveal/Fade';
import { Slider } from "../Glider";
import { AudioVisualComponent } from "../AudioVisual";

export default function ServiceContent() {
  return (
    <Container>
      <Main>
        <TitleComponent name="Serviços" />
        <Fade left>
          <Slider />
        </Fade>
        <Fade top>
          <Subtitle>
            <p>Não importa quais são as suas <strong><u>demandas</u></strong>, você pode contar com os meus serviços de orientação e ajuda para desenvolver um projeto altamente bem-sucedido.
              Cada serviço é completamente <strong><u>personalizado</u></strong> e <strong><u>implementado</u></strong> de forma cuidadosa e profissional para atender às suas necessidades.
            </p>
          </Subtitle>
        </Fade>

        <AudioVisualComponent />
      </Main>
    </Container >
  )
}

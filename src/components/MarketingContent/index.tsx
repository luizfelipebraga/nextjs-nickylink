import CardMarketing from "../Cards/Marketing";
import { Container, Topics, Topic, WrapperCard, Main } from "./styles";
import Fade from 'react-reveal/Fade';

type CardProps = {
  title: string;
  img: string;
  description: string;
}

export default function MarketingContent() {

  const cardMarkerting: CardProps[] = [
    {
      img: '/images/mark1.webp',
      title: 'Vídeos aumentam o tráfego orgânico',
      description: 'Um vídeo faz com que sua página seja 53% mais propensa a estar na primeira página do Google e assim irá atrair 2 a 3 vezes mais visitantes. Com o video SEO bem trabalhado o resultado irá escalar com o tempo.'
    },

    {
      img: '/images/mark2.webp',
      title: 'Vídeos aumentam as vendas',
      description: 'Segundo a Forrester, três a cada cinco internautas topam assistir a um vídeo se estiverem interessados em um determinado produto ou serviço. E 52% dos consumidores dizem que vídeos de produtos os ajudam a tomar decisões de compra.'
    },

    {
      img: '/images/mark3.webp',
      title: 'Vídeos aumentam o valor percebido do produto, serviço e da marca',
      description: 'Com um roteiro campeão é possível criar histórias engajantes, construir uma conexão emocional direta, explicar uma solução de maneira brilhante, utilizar efeitos visuais incríveis e assim conquistar a sua audiência.'
    },
  ]

  return (
    <Container>
      <Main>
        <h2>Por que marketing de vídeo é importante para o seu negócio?</h2>
        <p>Existem centenas de razões pelas quais os
          profissionais de marketing digital devem escolher criar vídeos,
          mas algumas das estatísticas mais impressionantes que comprovam a importância
          do vídeo no marketing digital são:
        </p>

        <Topics>
          <Topic>
            <h3>97% dos Profissionais de Marketing</h3>
            <p>Afirmam que os videos ajudam seus clientes a entender melhor seus produtos.</p>
          </Topic>

          <Topic>
            <h3>81% das Empresas</h3>
            <p>Agora usam video parte de suas estratégias de marketing digital.</p>
          </Topic>

          <Topic>
            <h3>90% dos Consumidores</h3>
            <p>Afirmam os videos ajudam na decisão de uma compra.</p>
          </Topic>
        </Topics>

        <WrapperCard>
          {
            cardMarkerting.map((card, index) => {
              return <Fade left key={index}>
                <CardMarketing
                  key={index}
                  title={card.title}
                  img={card.img}
                  description={card.description}
                />
              </Fade>
            })
          }
        </WrapperCard>
      </Main>
    </Container>
  )
}

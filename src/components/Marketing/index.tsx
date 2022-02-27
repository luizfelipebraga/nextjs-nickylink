import CardMarketing from "../Cards/Marketing";
import { Container, Topics, Topic, WrapperCard } from "./styles";
import img1 from '../../assets/mark1.webp';
import img2 from '../../assets/mark2.webp';
import img3 from '../../assets/mark3.webp';

type CardProps = {
  title: string;
  img: StaticImageData;
  description: string;
}

export default function MarketingContent() {

  const cardMarkerting: CardProps[] = [
    {
      img: img1,
      title: 'Vídeos aumentam o tráfego orgânico',
      description: 'Um vídeo faz com que sua página seja 53% mais propensa a estar na primeira página do Google e assim irá atrair 2 a 3 vezes mais visitantes. Com o video SEO bem trabalhado o resultado irá escalar com o tempo.'
    },

    {
      img: img2,
      title: 'Vídeos aumentam as vendas',
      description: 'Estamos falando simplesmente da preferência das pessoas e um meio através do qual é possível condensar os melhores argumentos de venda rapidamente. Segundo a Forrester, três a cada cinco internautas topam assistir a um vídeo se estiverem interessados em um determinado produto ou serviço. E 52% dos consumidores dizem que vídeos de produtos os ajudam a tomar decisões de compra. Ora, ao utilizar vídeos para marketing, boa parte das pessoas irão assisti-los ao visitar os seus canais de comunicação e, então, contando com uma boa produtora de vídeo, é só marcar o gol.'
    },

    {
      img: img3,
      title: 'Vídeos aumentam o valor percebido do produto, serviço e da marca',
      description: 'Como dissemos, vídeos são uma ótima fonte de empatia, lembrança e autoridade. A despeito da recente explosão de vídeos on-line, um bom material audiovisual é e sempre será visto como um fator de diferencial, algo exclusivo, pois é nítido que é fruto de um processo apurado de produção. Com um roteiro campeão é possível, por exemplo, criar histórias engajantes, construir uma conexão emocional direta, explicar uma solução de maneira brilhante, utilizar efeitos visuais incríveis e assim conquistar a sua audiência.'
    },
  ]

  return (
    <Container>
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
            return <CardMarketing
              key={index}
              title={card.title}
              img={card.img}
              description={card.description}
            />
          })
        }
      </WrapperCard>
    </Container>
  )
}

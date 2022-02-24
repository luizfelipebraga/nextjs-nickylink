import { Container, Topics, Topic, WrapperCard, Card } from "./styles";

export default function MarketingContent() {
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
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </WrapperCard>
    </Container>
  )
}

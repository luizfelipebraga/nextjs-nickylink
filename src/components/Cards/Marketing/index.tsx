import Image from "next/image"
import { Container, Description, TitleDescription, Title, BoxImage } from "./styles"

type CardProps = {
  img: string;
  title: string;
  description: string;
}


export default function MarketingCard({ img, title, description }: CardProps) {
  return (
    <Container>
        <img src={img} alt="imagem para negócio" />
      <TitleDescription>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleDescription>
    </Container>
  )
}

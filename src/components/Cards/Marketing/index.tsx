import Image from "next/image"
import { Container, Description, TitleDescription, Title } from "./styles"

type CardProps = {
  img: StaticImageData;
  title: string;
  description: string;
}


export default function CardMarketing({ img, title, description }: CardProps) {
  return (
    <Container>
      <Image src={img} alt="imagem para negócio" objectFit="cover"/>
      <TitleDescription>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleDescription>
    </Container>
  )
}

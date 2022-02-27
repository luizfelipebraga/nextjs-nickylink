import Image from "next/image"
import { Container, Description, TitleDescription, Title, BoxImage } from "./styles"

type CardProps = {
  img: StaticImageData;
  title: string;
  description: string;
}


export default function MarketingCard({ img, title, description }: CardProps) {
  return (
    <Container>
      <BoxImage>
        <Image src={img} alt="imagem para negócio" objectFit="cover" />
      </BoxImage>
      <TitleDescription>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleDescription>
    </Container>
  )
}

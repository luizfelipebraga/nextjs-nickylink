import Image from "next/image"
import { Container, Description, TitleDescription, Title } from "./styles"

type CardProps = {
  img: string;
  title: string;
  description: string;
}


export default function MarketingCard({ img, title, description }: CardProps) {
  return (
    <Container>
      <Image src={img} alt="business image" width={450} height={350}/>
      <TitleDescription>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleDescription>
    </Container>
  )
}

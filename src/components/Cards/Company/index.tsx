import Image from "next/image";
import { Container, ImageStyled, Main } from "./styles";

type CardCompanyProps = {
  image: string;
  title: string;
  description: string;
}

export function CardCompany(props: CardCompanyProps) {
  return (
    <Container>
      <ImageStyled src={props.image} alt={props.title} width={400} height={300}/>
      <Main>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </Main>
    </Container>
  )
}

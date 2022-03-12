import Image from "next/image";
import { Container, ImageStyled, Main } from "./styles";

type CardCompanyProps = {
  image: string;
  title: string;
  description: string;
  siteHref: string;
}

export function CardCompany(props: CardCompanyProps) {
  return (
    <a href={props.siteHref} target="_blank" rel="noopener">
      <Container>
        <ImageStyled src={props.image} alt={props.title} width={400} height={300} />
        <Main>
          <h3>{props.title}</h3>
          <p>{props.description.length > 100 ? props.description.substring(0, 100) + '. . .' : props.description}</p>
        </Main>
      </Container>
    </a>
  )
}

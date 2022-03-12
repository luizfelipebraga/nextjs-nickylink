import Image from "next/image";
import { Container, ImageStyled, Main, Anchor } from "./styles";

type CardCompanyProps = {
  image: string;
  title: string;
  description: string;
  siteHref: string;
}

export function CardCompany(props: CardCompanyProps) {
  return (
    <>
      {props.siteHref.length > 1 ? (
        <Anchor href={props.siteHref} target="_blank" rel="noreferrer" hrefLenght={props.siteHref}>
          <Container>
            <ImageStyled src={props.image} alt={props.title} width={400} height={250} />
            <Main>
              <h3>{props.title}</h3>
              <p>{props.description.length > 150 ? props.description.substring(0, 100) + '. . .' : props.description}</p>
            </Main>
          </Container>
        </Anchor>
      ) : (
        <Anchor href={void(0)} rel="noreferrer" hrefLenght={props.siteHref}>
          <Container>
            <ImageStyled src={props.image} alt={props.title} width={400} height={250} />
            <Main>
              <h3>{props.title}</h3>
              <p>{props.description.length > 150 ? props.description.substring(0, 100) + '. . .' : props.description}</p>
            </Main>
          </Container>
        </Anchor>
      )}

    </>
  )
}

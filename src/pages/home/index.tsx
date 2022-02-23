import { NextPage } from "next";
import Image from "next/image";
import Logo from '../../assets/large-logo.png';
import { Aside, BoxImage, Container, ImageStyled, SocialMedias, Title, TitleSection } from "./styles";

const HomePage: NextPage = () => {
  return (
    <Container>

      <TitleSection>
        <Aside>
          <Title>
            <span>Olá, Eu sou</span>
            <h1>Eric Ferreira</h1>
            <p>Designer Gráfico / Editor </p>
          </Title>

          <BoxImage>
          <Image src={Logo} alt="photo" />
        </BoxImage>
        </Aside>

        

        <SocialMedias>
            <span>Email</span>
            <span>Tel: +55 (35) 98812-6239</span>
            <span>Twitter humilde</span>
          </SocialMedias>
      </TitleSection>
    </Container>
  )
}

export default HomePage;

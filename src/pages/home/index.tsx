import { NextPage } from "next";
import Image from "next/image";
import Logo from '../../assets/large-logo.png';
import { Aside, BoxImage, Container, SocialMedias, TitleSection } from "../../styles/home/styles";

const HomePage: NextPage = () => {
  return (
    <Container>

      <TitleSection>
        <Aside>
            <span>Olá, Eu sou</span>
            <div>
              <h1>Eric Ferreira</h1>
              <p>Designer Gráfico / Editor </p>
            </div>
        </Aside>

        <BoxImage>
            <Image src={Logo} alt="photo" />
        </BoxImage>

      </TitleSection>


        <SocialMedias>
          <span>Email</span>
          <span>Tel: +55 (35) 98812-6239</span>
          <span>Twitter humilde</span>
        </SocialMedias>
    </Container>
  )
}

export default HomePage;

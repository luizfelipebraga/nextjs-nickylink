import { NextPage } from "next";
import Image from "next/image";
import TwitterImg from '../../assets/fa-twitter.svg';
import EmailImg from '../../assets/fa-email.svg';
import Logo from '../../assets/large-logo.png';
import { Aside, BoxImage, Container, SocialMedias, TitleSection } from "../../styles/home/styles";
import Link from "next/link";

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
        <a href="mailto:nky-contato@outlook.com" target="_blank">
          <Image src={EmailImg} alt="email" height={40} width={40}/>
        </a>

        <a href="https://twitter.com/nkylink" target="_blank">
          <Image src={TwitterImg} alt="twitter" height={40} width={40} />
        </a>
      </SocialMedias>
    </Container>
  )
}

export default HomePage;

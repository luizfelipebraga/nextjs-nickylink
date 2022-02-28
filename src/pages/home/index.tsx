import { NextPage } from "next";
import Image from "next/image";
import TwitterImg from '../../assets/fa-twitter.svg';
import EmailImg from '../../assets/fa-email.svg';
import Logo from '../../assets/large-logo.png';
import { Aside, BoxImage, Container, SocialMedias, TitleSection, HomeSection, MarketingSection, ServiceSection } from "../../styles/home/styles";
import Fade from 'react-reveal/Fade';
import MarketingContent from "../../components/Marketing";
import ServiceContent from "../../components/Service";

const HomePage: NextPage = () => {
  return (
    <Container>
      <HomeSection>
        <TitleSection>
            <Aside>
              <span>Olá, Eu sou</span>
              <div>
                <h1>Eric &quot;Nkylink&quot; Ferreira</h1>
                <p>Designer Gráfico / Editor </p>
              </div>
            </Aside>

          <BoxImage>
            <Image src={Logo} alt="photo" />
          </BoxImage>
        </TitleSection>

        <SocialMedias>
          <a href="mailto:nky-contato@outlook.com" target="_blank" rel="noreferrer">
            <Image src={EmailImg} alt="email" height={30} width={30} />
          </a>

          <a href="https://twitter.com/nkylink" target="_blank" rel="noreferrer">
            <Image src={TwitterImg} alt="twitter" height={30} width={30} />
          </a>
        </SocialMedias>
      </HomeSection>

      <MarketingSection>
        <MarketingContent />
      </MarketingSection>

      <ServiceSection>
        <ServiceContent />
      </ServiceSection>

    </Container>
  )
}

export default HomePage;

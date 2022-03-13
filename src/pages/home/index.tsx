import { NextPage } from "next";
import Image from "next/image";
import TwitterImg from '../../assets/white/fa-twitter.svg';
import EmailImg from '../../assets/white/fa-email.svg';
import Logo from '../../assets/large-logo.png';
import { Aside, BoxImage, Container, SocialMedias, TitleSection, HomeSection } from "../../styles/home/styles";
import MarketingContent from "../../components/MarketingContent";
import ServiceContent from "../../components/ServiceContent";
import { FormComponent } from "../../components/Form";

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
            <Image src={EmailImg} alt="email" height={30} width={30} priority />
          </a>

          <a href="https://twitter.com/nkylink" target="_blank" rel="noreferrer">
            <Image src={TwitterImg} alt="twitter" height={30} width={30} />
          </a>
        </SocialMedias>
      </HomeSection>

      <MarketingContent />

      <ServiceContent />

      <FormComponent />

    </Container>
  )
}

export default HomePage;

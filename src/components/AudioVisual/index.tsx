import TitleComponent from '../Title';
import { Container, Grid } from './styles';
import Fade from 'react-reveal/Fade';
import { CardCompany } from '../Cards/Company';

export function AudioVisualComponent() {

  type CompanyProps = {
    image: string;
    title: string;
    description: string;
    href: string;
  }

  const company: CompanyProps[] = [
    {
      href: 'https://diligentversion.pt/',
      image: '/videos/thumb/diligente.png',
      title: 'Diligent Version',
      description: 'A DiligentVersion é uma empresa inovadora de recrutamento para setor da indústria da metalomecânica em regime de trabalho temporário, com certificação em serviços de outsourcing profissional. Uma empresa portuguesa assente em mais de vinte e cinco anos de experiência de trabalho no ramo da indústria da metalomecânica e em constante formação e desenvolvimento.'
    },

    {
      href: 'https://www.bniespana.com/',
      image: '/videos/thumb/bni.png',
      title: 'BNI ESPANA',
      description: 'Fundada en 1985, BNI® es una organización de redes empresariales probada y global. Nuestros miembros son profesionales de negocios que se ayudan mutuamente para hacer crecer sus negocios a través de su compromiso con nuestro principal valor central, Givers Gain®. Cada semana, en miles de comunidades en todo el mundo, los miembros se reúnen con otros líderes empresariales de confianza para construir y alimentar relaciones duraderas y aprobar referencias comerciales cualificadas.'
    },

    {
      href: 'https://conferecondominios.com/',
      image: '/videos/thumb/confere.png',
      title: 'Confere Condominios',
      description: 'A ConfereDominios tem como principal atividade a prestação de serviços de administração e gestão de Condomínios. A CONFERECONDOMíNIOS é um parceiro ativo dos Condomínios cuja administração lhe é confiada, pois com a sua disponibilidade e atuação contribui para o bom funcionamento e para as excelentes relações entre condóminos.'
    },

    {
      href: 'https://www.remax.pt/',
      image: '/videos/thumb/reimax.png',
      title: 'Remax Portugal',
      description: 'empresa bala'
    },

    {
      href: '',
      image: '/videos/thumb/rumo.png',
      title: 'Rumo ao Topo',
      description: 'empresa bala'
    },

    {
      href: 'https://diligentversion.pt/',
      image: '/videos/thumb/niuscup3.jpg',
      title: 'Niuscup',
      description: 'empresa bala'
    },
  ];

  const getCompanies = company.map((c, index) => {
      return <CardCompany key={index} siteHref={c.href} image={c.image} title={c.title} description={c.description} />
  })

  return (
    <Container>
      <TitleComponent name="ÁudioVisual" subtitle="&#8595; Veja alguns dos meus trabalhos." />
      <Grid>
        <Fade left>
          {getCompanies}
        </Fade>
      </Grid>
    </Container>
  )
}
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
      description: 'empresa bala'
    },

    {
      href: 'https://conferecondominios.com/',
      image: '/videos/thumb/confere.png',
      title: 'Confere Condominios',
      description: 'empresa bala'
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
      image: '/videos/thumb/diligente.png',
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
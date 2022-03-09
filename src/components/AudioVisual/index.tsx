import TitleComponent from '../Title';
import { Container, Grid } from './styles';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';
import { CardCompany } from '../Cards/Company';

export function AudioVisualComponent() {

  type CompanyProps = {
    image: string;
    title: string;
    description: string;
  }

  const company: CompanyProps[] = [
    {
      image: '/videos/thumb/diligente.png',
      title: 'Diligente Company',
      description: 'empresa bala'
    },

    {
      image: '/videos/thumb/diligente.png',
      title: 'Diligente Company',
      description: 'empresa bala'
    },

    {
      image: '/videos/thumb/diligente.png',
      title: 'Diligente Company',
      description: 'empresa bala'
    },
  ];

  const getCompany = company.map((c, index) => {
    return <CardCompany key={index} image={c.image} title={c.title} description={c.description} />
  })

  return (
    <Container>
      <TitleComponent name="ÁudioVisual" subtitle="&#8595; Veja alguns dos meus trabalhos." />
      <Fade top>
        <Grid>
          {getCompany}
        </Grid>
      </Fade>
    </Container>
  )
}
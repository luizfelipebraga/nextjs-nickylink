import TitleComponent from '../Title';
import { Container } from './styles';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';



export function AudioVisualComponent() {

  type CompanyProps = {
    image: string;
    title: string;
  }

  const company: CompanyProps[] = [
    {
      image: '',
      title: ''
    }
  ];

  const getCompany = company.map((c, index) => {
    return <CardCompany key={index} img={c.image} title={c.title} />
  })

  return (
    <Container>
      <TitleComponent name="ÁudioVisual" subtitle="&#8595; Veja alguns dos meus trabalhos." />
      <Fade top>
        <Grid>
          {


            company.map((c, index) => {
              <CardCompany key={index} img={c.image} title={c.title} />

            })
          }
        </Grid>
      </Fade>
    </Container>
  )
}
import React from 'react'
import { Description, Title } from './styles'
import Fade from 'react-reveal/Fade';

type TitleProps = {
  name: string;
  subtitle?: string;
}

export default function TitleComponent({ name, subtitle }: TitleProps) {
  return (
    <Fade top>
      <Title>
        <h2>{name}</h2>
      </Title>
      <Description>{subtitle}</Description>
    </Fade>
  )
}

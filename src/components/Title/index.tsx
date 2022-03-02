import React from 'react'
import { Title } from './styles'
import Fade from 'react-reveal/Fade';

type TitleProps = {
  name: string;
}

export default function TitleComponent({ name }: TitleProps) {
  return (
    <Fade top>
      <Title>
        <h2>{name}</h2>
      </Title>
    </Fade>
  )
}

import React from 'react'
import { Title } from './styles'

type TitleProps = {
  number: string;
  name: string;
}

export default function TitleComponent({ number, name }: TitleProps) {
  return (
    <Title>
      <h2><span>{number}</span>{name}</h2>
    </Title>
  )
}

import React from 'react'
import { Title } from './styles'

type TitleProps = {
  name: string;
}

export default function TitleComponent({ name }: TitleProps) {
  return (
    <Title>
      <h2>{name}</h2>
    </Title>
  )
}

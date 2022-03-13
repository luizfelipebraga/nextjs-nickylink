import React from 'react'
import { Description, Title } from './styles'
import Fade from 'react-reveal/Fade';
import { HTMLAttributes } from "react";

interface TitleProps extends HTMLAttributes<HTMLElement> {
  name: string;
  subtitle?: string;
  color?: string;
}

export default function TitleComponent({ name, subtitle, ...props }: TitleProps) {
  return (
    <Fade top>
      <Title>
        <h2 {...props }>{name}</h2>
      </Title>
      <Description>{subtitle}</Description>
    </Fade>
  )
}

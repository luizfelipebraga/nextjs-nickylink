import { AnchorHTMLAttributes } from "react";
import { Button, Container } from "./styles";

type ContatoProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ContatoNavBottom({ ...props }: ContatoProps) {
  return (
    <Container>
      <Button {...props} />
    </Container>
  )
}

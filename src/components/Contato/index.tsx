import { InputHTMLAttributes } from "react";
import { Button, Container } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function ContatoButton({...props}: InputProps) {
  return (
    <Container {...props}>
      <Button href="#">Contate-me</Button>
    </Container>
  );
}

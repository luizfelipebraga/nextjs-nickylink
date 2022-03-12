import { ReactNode } from "react";
import { FixedSocialsMedias } from "../FixedSocialsMedias";
import { Footer } from "../Footer";
import { NavBar } from "../Nav";
import { Container, Content } from "./styles";

type LayoutProps = {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <NavBar />
      <FixedSocialsMedias />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}
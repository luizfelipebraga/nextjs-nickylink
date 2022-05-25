import Image from "next/image";
import Link from "next/link";
import Logo from '../../assets/logo1.png';
import { ContatoButton } from "../Contato";
import { Header, Nav, Li, BoxImage } from "./styles";

export function NavBar() {
  return (
    <Header>
      <Nav>
        <Link href="/home" passHref>
          <BoxImage>
            <Image src={Logo}
              alt="Logo"
              loading="eager"
              layout="responsive"
            />
          </BoxImage>
        </Link>

        <ul>
          <Li>
            <Link href="/home">Página Inicial</Link>
            <Link href="#services">Serviços</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="/sobre">Sobre</Link>
            <ContatoButton />
          </Li>
        </ul>
      </Nav>
    </Header >
  )
}

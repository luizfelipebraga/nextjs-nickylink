import Image from "next/image";
import Link from "next/link";
import Logo from '../../assets/logo.webp';
import { ContatoButton } from "../Contato";
import { Header, Nav, Ul, BoxImage } from "./styles";

export function NavBar() {
  return (
    <Header>
      <Nav>
        <Link href="/home">
          <BoxImage>
            <Image src={Logo} alt="Logo" loading="eager" priority />
          </BoxImage>
        </Link>

        <Ul>
          <Link href="/home">Página Inicial</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/sobre">Sobre</Link>
          <ContatoButton />
        </Ul>
      </Nav>
    </Header >
  )
}

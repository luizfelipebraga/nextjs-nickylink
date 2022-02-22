import Image from "next/image";
import Link from "next/link";
import Logo from '../../assets/logo.webp';
import { ContatoButton } from "../Contato";
import { Header, Nav, Ul } from "./styles";

export function NavBar() {

  return (
    <Header>
      <Nav>
        <Link href="/home">
            <Image src={Logo} alt="Logo" loading="eager" priority />
        </Link>
        <Ul>
          <Link href="/home">Página Inicial</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/sobre">Sobre</Link>
        </Ul>
        <ContatoButton />
      </Nav>
    </Header >
  )
}

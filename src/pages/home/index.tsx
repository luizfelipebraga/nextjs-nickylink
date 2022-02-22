import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from '../../assets/logo.webp';
import { Container } from "./styles";

const HomePage: NextPage = () => {
  return (
    <Container>
      <span>ola</span>
      <Image src={Logo}/>
    </Container>
  )
}

export default HomePage;

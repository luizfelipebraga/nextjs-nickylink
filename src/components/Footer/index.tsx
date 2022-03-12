import Image from "next/image";
import { Container, Grid, List, Main, ReservedRights } from "./styles";
import Twitter from '../../assets/fa-twitter.svg';
import Email from '../../assets/fa-email.svg';
import Cellphone from '../../assets/fa-phone-solid.svg';

export function Footer() {
  return (
    <Container>
      <Main>
        <Grid>
          <List>
            <span>Servi&ccedil;os</span>
            <ul>
              <li>Edi&ccedil;&atilde;o</li>
              <li>Produ&ccedil;&atilde;o</li>
              <li>Modelagem</li>
              <li>Fotografia</li>
              <li>Rede Social</li>
            </ul>
          </List>

          <List>
            <span style={{ textAlign: 'center' }}>Contato</span>
            <ul>
              <li><Image src={Email} alt="Email logotipo" width={30} height={20} /> <span>nky-contato@outlook.com</span></li>
              <li><Image src={Cellphone} alt="Cellphone logotipo" width={30} height={20} /> <span>+55 (35) 98812-6239</span></li>
              <li><Image src={Twitter} alt="Twitter logotipo" width={30} height={20} /> <span>nyklink</span></li>
            </ul>
          </List>

          <List>
            <span>Time</span>
            <ul>
              <li>Eric Ferreira</li>
              <li>Caio</li>
              <li>Jo&atilde;o Vitor</li>
              <li>Rafael</li>
            </ul>
          </List>
        </Grid>
        <ReservedRights><strong>&copy; 2022 Eric Ferreira</strong> All Rights Reserved.</ReservedRights>
      </Main>
    </Container>
  )
}
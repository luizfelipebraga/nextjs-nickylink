import { Container, Grid, List, Main, ReservedRights } from "./styles";

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
              <li>E-mail: <span>nky-contato@outlook.com</span></li>
              <li>Tel: <span>+55 (35) 98812-6239</span></li>
              <li>Twitter: <span>nyklink</span></li>
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
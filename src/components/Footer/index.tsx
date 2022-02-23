import { Container, Grid, ListContato, ListServices, ListTime, Main, ReservedRights } from "./styles";

export function Footer() {
  return (
    <Container>
      <Main>
        <Grid>
          <ListServices>
            <span>Servi&ccedil;os</span>
            <ul>
              <li>Edi&ccedil;&atilde;o</li>
              <li>Produ&ccedil;&atilde;o</li>
              <li>Modelagem</li>
              <li>Fotografia</li>
              <li>Rede Social</li>
            </ul>
          </ListServices>

          <ListContato>
            <span>Contato</span>
            <ul>
              <li>E-mail: <span>nky-contato@outlook.com</span></li>
              <li>Tel: <span>+55 (35) 98812-6239</span></li>
              <li>Twitter: <span>nyklink</span></li>
            </ul>
          </ListContato>

          <ListTime>
            <span>Time</span>
            <ul>
              <li>Eric Ferreira</li>
              <li>Caio</li>
              <li>Jo&atilde;o Vitor</li>
              <li>Rafael</li>
            </ul>
          </ListTime>
        </Grid>
        <ReservedRights><strong>&copy; 2022 Eric Ferreira</strong> All Rights Reserved.</ReservedRights>
      </Main>
    </Container>
  )
}
import { Container, List } from './styles';
import Image from 'next/image';
import Twitter from '../../assets/gray/fa-twitter.svg';
import Email from '../../assets/gray/fa-email.svg';

export function FixedSocialsMedias() {
  return (
    <Container>
      <List>
        <li>
          <a href="https://twitter.com/nkylink" target="_blank" rel="noreferrer">
            <Image src={Twitter} width={40} height={50} alt="Twitter logo"/>
          </a>
        </li>

        <li>
          <a href="mailto:nky-contato@outlook.com" target="_blank" rel="noreferrer">
            <Image src={Email} width={40} height={50} alt="Email logo"/>
          </a>
        </li>
      </List>
    </Container>
  )
}

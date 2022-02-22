import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: var(--white);

  padding: 1rem 1.5rem;
`;

export const Nav = styled.nav`
  width: 100%;
  background-color: var(--white);
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 1.5rem;
  a {
    color: rgb(135, 135, 135);
    font-size: 1rem;
    transition: all 100ms ease-out 0s;

    &:hover {
      color: #000;
      text-decoration-color: rgb(135, 135, 135);
      text-decoration-line: underline;
      text-underline-offset: 40px;
      text-decoration-thickness: 3px;
      }
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  background-image: linear-gradient(225deg, #252525, #252525);
  color: var(--white);
  font-size: 1rem;
  border-radius: 2rem;
  padding: 1rem 3rem;
  overflow: hidden;
  font-weight: bold;
  z-index: 1;
  transition: filter 200ms ease;
  &:hover {
    filter: brightness(1.5);
  }
`;
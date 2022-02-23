import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  background: #f8f8f8;
  color: #252525;
  border: 1px solid #000;

  font-size: 1rem;
  border-radius: 2rem;
  padding: .7rem 1.5rem;
  overflow: hidden;
  font-weight: bold;
  z-index: 1;
  &:hover {
    background: transparent;
    color: var(--white);
  }
`;
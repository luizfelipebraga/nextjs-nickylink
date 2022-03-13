import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  position: fixed;
  bottom: 43%;
  left: 50px;
  right: auto;
  z-index: 10;

  @media (max-width: 1500px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;

  li {
    height: 3.8rem;
    width: 3.8em;
    border-bottom: 1px solid var(--gray);
    border-right: 1px solid var(--gray);
    border-radius: 5px;
  }
`;
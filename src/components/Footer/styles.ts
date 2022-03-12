import styled from "styled-components";

export const Container = styled.footer`
  background: #0d0d0e;
  width: 100%;
`;

export const Main = styled.main`
  max-width: 1200px;
  margin-inline: auto;
`;

export const Grid = styled.div`
  list-style: none;
  padding: 100px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  color: #949494;
  ul {
    margin-top: 1rem;
    li {
      display: flex;
      gap: 1rem;
      align-items: center;
      margin-top: 0.5rem;
      span {
        font-size: 1rem;
        color: #949494;
      }
    }
  }

  span {
    font-size: 1.6rem;
    color: #fff;
  }
`;

export const ReservedRights = styled.p`
  text-align: center;
`;

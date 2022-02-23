import styled from 'styled-components';

export const Container = styled.footer`
  background: #0d0d0e;
  width: 100%;
`;

export const Main = styled.main`
  max-width: 1200px;
  margin-inline: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr minmax(0, 300px) 1fr;
  padding: 100px 0;
`;

export const ListServices = styled.div`
  justify-self: center;
  color: #949494;
  ul {
    margin-top: 1rem;
      li {
      margin-top: .3rem;

      span {
        font-size: 1rem;
      }
    }
  }
  
  span {
    font-size: 1.6rem;
    color: #fff;
  }
`;

export const ListContato = styled.div`
  justify-self: center;
  color: #949494;
  ul {
    margin-top: 1rem;
    li {
      margin-top: .3rem;
      text-decoration: none;
      list-style: none;
      list-style-type: none;

      span {
        font-size: 1rem;
      }
    }
  }
  
  span {
    font-size: 1.6rem;
    color: #fff;
  }
`;

export const ListTime = styled.div`
  color: #949494;
  justify-self: center;
  ul {
    margin-top: 1rem;
    li {
      list-style: none;
      margin-top: .3rem;

      span {
        font-size: 1rem;
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
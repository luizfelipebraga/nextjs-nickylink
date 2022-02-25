import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -8rem;
  max-width: 1200px;
  margin-bottom: 2rem;
  background: #fff;
  padding: 2.5rem;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h2 {
    max-width: 650px;
    margin: 0 auto;
    font-weight: 500;
    text-align: center;
    font-size: clamp(1.3rem, 5vw, 2.8rem);
  }

  p {
    margin: 0 auto;
    font-size: 1.1rem;
    max-width: 840px;
    margin-top: 2rem;
    font-weight: 500;
    text-align: center;
  }
`;

export const Topics = styled.div`
  display: flex;
  align-items: stretch;
  text-align: center;
  gap: 2rem;
  justify-content: space-between;

  margin-top: 4rem;
`;

export const Topic = styled.div`
  max-width: 300px;
  padding: 1rem;
  border: 1px solid rgb(148, 148, 148);
  border-top: 0.4rem solid rgb(148, 148, 148);
  border-radius: 5px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  h3 {
    font-weight: 500;
    font-size: 1.2rem;
  }

  p {
    font-weight: 500;
    font-size: .978rem;
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const Card = styled.div`
`;
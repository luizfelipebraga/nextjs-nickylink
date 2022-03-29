import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background: #f7f7f9;
  min-height: 20rem;
  border: 1px solid #d9d9d9;

  >img {
    object-fit: cover;
    min-height: 350px;
    min-width: 350px;
  }

  @media (max-width: 1200px) {
    img {
      display: none;
    }
  }
`;

export const BoxImage = styled.div`
  height: 100%;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const TitleDescription = styled.div`
  max-width: 550px;
  padding: 1rem 2rem 1rem 1rem;
`;

export const Title = styled.h4`
  text-align: center;
  text-transform: capitalize;
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  font-weight: 500;
`;

export const Description = styled.p`
  color: #626262;
  font-weight: 300 !important;
  text-align: left !important;
  font-size: .975rem !important;
`;
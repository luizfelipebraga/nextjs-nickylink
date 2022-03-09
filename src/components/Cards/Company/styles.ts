import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  min-height: 10rem;
  max-width: 20rem;
  background-color: #fff;
  border-radius: 1rem;
`;

export const ImageStyled = styled(Image)`
  border-radius: 1rem !important;
  object-fit: cover !important;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  padding: 1.5rem;
  h4 {
    font-weight: 500;
    color: #000;
  }
`;
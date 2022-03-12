import styled from 'styled-components';
import Image from 'next/image';

interface AnchorProps {
  hrefLenght: string;
}

export const Anchor = styled.a<AnchorProps>`
  cursor: ${({ hrefLenght }) => hrefLenght.length < 1 && 'default'};
`;


export const Container = styled.div`
  height: 25rem;
  max-width: 20rem;
  background-color: #fff;
  border-radius: .5rem;
  margin-bottom: 2rem;

  transition: transform .2s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImageStyled = styled(Image)`
  border-top-right-radius: .5rem !important;
  border-top-left-radius: .5rem !important;
  object-fit: cover !important;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #000;
  }

  p {
    font-size: .89rem;
  }
`;
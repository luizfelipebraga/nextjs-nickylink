import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 0;
`;

export const TitleSection = styled.section`
  max-width: 900px;
  margin: 0 auto;

`;
export const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  span {
    font-weight: 500;
    color: #f8f8f8;
  }

  h1 {
    font-size: clamp(35px, 8vw, 65px);
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
  }
`;


export const BoxImage = styled.div`
  width: 400px;
  height: 400px;
`;

export const ImageStyled = styled(Image)`
  height: auto;
  width: 100%;
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;


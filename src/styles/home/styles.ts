import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const HomeSection = styled.section`
  min-height: 90vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0 150px;
`;

export const TitleSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  span {
    font-weight: 500;
    font-size: 1.2rem;
    color: #f8f8f8;
  }

  p {
    font-weight: 500;
    font-size: 1.2rem;
    color: #9d9d9d;
  }

  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    text-transform: capitalize;
    font-weight: 700;
    color: #fff;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxImage = styled.div`
  width: 500px;
`;

export const ImageStyled = styled(Image)`
  height: auto;
  width: 100%;
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  a {
    display: flex;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: transform 0.2s ease-in-out;
    padding: 1rem;

    &:hover {
      transform: translateY(-3px);
    }
    
  }
`;

export const MarketingSection = styled.section`
  height: 100%;
  width: 100%;
  background: #f2f2f2;
  
  display: flex;
  justify-content: center;
`;

export const ServiceSection = styled.section`
  min-height: 100vh;
  padding: 8rem 1rem;
  width: 100%;
  background: #18181b;
`;

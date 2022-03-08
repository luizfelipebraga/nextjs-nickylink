import styled from 'styled-components';

export const Video = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  @media (min-width: 1000px) {
    object-fit: cover;
  }
`;
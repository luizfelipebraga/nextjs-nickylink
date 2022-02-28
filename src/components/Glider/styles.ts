import styled from "styled-components";
import Guitarra from '../../assets/guitarraVerde.jpg';


export const Container = styled.div`
  .glider-dot {
    background-color: #878788;
  }

  .glider-dot.active {
    background: #fff;
  }
  .glider-prev, .glider-next {
    color: #fff;
    top: 12rem;
    font-size: 5rem;
  }
  .glider-prev {
    color: #fff;
  }

  .glider {
    height: 30rem;
  }
  .glider-contain {
    background: #0d0d0d;
  }
  .glider-dots {
  }
  .glider-track {
    height: 100%;
  }
  .glider-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide {
    background-color: #0d0d0d;
    color: #fff;
    font-size: 3em;
    font-weight: bold;
  }
`;

export const Box = styled.div`
  background-color: #05272d;
  color: darkgreen;
  font-size: 3rem;
  font-weight: bold;
`;

export const Image = styled.div`
  background-image: url({Guitarra});
  background-repeat: no-repeat;
  background-size: cover;
  border: 0;
  height: 100%;
  width: 100%;
`;

export const DarkBackground = styled.div` 
  background: linear-gradient(180deg, rgba(77, 77, 77, 0) 2.66%, #05272da6 20.18%);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  span  {
    color: #fff;
    font-weight: 300;
    text-transform: uppercase;
    font-size: clamp(1.5rem, 4vw, 4rem);
    &:first-child {
      font-weight: 700;
    }
  }
`;
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
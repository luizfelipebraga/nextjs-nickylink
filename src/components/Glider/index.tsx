import { Container } from "./styles";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { VideoComponent } from "../Video";
import { useEffect, useLayoutEffect } from "react";

export function Slider() {
  const canUseDOM = typeof window !== 'undefined';
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => { });
  return (
    <Container>
      <Glider slidesToShow={2} hasArrows hasDots>
        <VideoComponent video='/videos/abertura.mp4' />
        <VideoComponent video='/videos/portugal.mp4' />
        <div className="slide">2</div>
        <div className="slide">3</div>
        <div className="slide">4</div>
        <div className="slide">5</div>
        <div className="slide">6</div>
        <div className="slide">7</div>
        <div className="slide">8</div>
        <div className="slide">9</div>
        <div className="slide">10</div>
        <div className="slide">11</div>
        <div className="slide">12</div>
      </Glider>
    </Container>
  );
}
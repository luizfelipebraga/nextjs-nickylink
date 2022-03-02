import { Container } from "./styles";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { VideoComponent } from "../Video";
import { useEffect, useLayoutEffect } from "react";

export function Slider() {
  const canUseDOM = typeof window !== 'undefined';
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {});
  return (
    <Container>
      <Glider slidesToShow={1} hasArrows hasDots>
        <VideoComponent video='/videos/Empresa/spain.mp4' />
        <VideoComponent video='/videos/Empresa/diligente.m4v' />
        <VideoComponent video='/videos/Empresa/logo-zoom.m4v' />
        <VideoComponent video='/videos/Empresa/RemaxPromo.m4v' />
        <VideoComponent video='/videos/Empresa/RumoAoTopoLivestream.mp4' />
        <VideoComponent video='/videos/Empresa/Slide-Conferecondominios.m4v' />
        <VideoComponent video='/videos/BornIntro.mp4' />
        <VideoComponent video='/videos/liga-brasileira.mp4' />
      </Glider>
    </Container>
  );
}
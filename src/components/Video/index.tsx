import React, { useEffect, useLayoutEffect, VideoHTMLAttributes } from "react";
import { Video } from "./styles";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  video: string;
};

export function VideoComponent({ ...props }: VideoProps) {

  const canUseDOM = typeof window !== 'undefined';
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {});

  return (
    <Video
      autoPlay
      loop
      muted>
      <source src={props.video} type="video/mp4" />
    </Video>
  )
}
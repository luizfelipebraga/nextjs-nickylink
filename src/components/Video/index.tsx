import React, { useEffect, useLayoutEffect, VideoHTMLAttributes } from "react";
import { Video } from "./styles";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  video: string;
};

export function VideoComponent({ ...props }: VideoProps) {

  const canUseDOM: boolean = !!(
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  );
  
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  return (
    <Video
      autoPlay
      controls
      loop
      muted>
      <source src={props.video} type="video/mp4" />
    </Video>
  )
}
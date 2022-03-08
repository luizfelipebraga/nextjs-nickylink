import React, { VideoHTMLAttributes } from "react";
import { Video } from "./styles";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  video: string;
};

export function VideoComponent({ ...props }: VideoProps) {
  return (
    <Video
      autoPlay
      loop
      muted>
      <source src={props.video} type="video/mp4" />
    </Video>
  )
}
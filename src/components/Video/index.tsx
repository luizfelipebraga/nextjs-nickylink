import React, { VideoHTMLAttributes } from "react";
import ReactPlayer from "react-player";
import { Video } from "./styles";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  video: string;
};

export default function VideoComponent({ ...props }: VideoProps) {
  return (
    <ReactPlayer
      autoPlay
      loop
      muted
      url={props.video} />
  )
}
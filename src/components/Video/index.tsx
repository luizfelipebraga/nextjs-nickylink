import React, { VideoHTMLAttributes } from "react";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  video: string;
};

export function VideoComponent({ ...props }: VideoProps) {
  return (
    <video
      autoPlay
      controls
      width="250"
      loop
      muted
      style={{
        position: "relative",
        width: "100%",
        height: "15rem",
        left: 0,
        top: 0,
      }}>
      <source src={props.video} type="video/mp4" />
    </video>
  )
}
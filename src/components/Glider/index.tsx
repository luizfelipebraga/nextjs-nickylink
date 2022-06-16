import React from 'react';
import dynamic from 'next/dynamic';
import { Container } from "./styles";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const VideoComponent = dynamic(() => import("../Video"));
React.useLayoutEffect = React.useEffect

export default function Slider() {

  const videoURLS: string[] = [
    "https://vimeo.com/720840212",
    "https://vimeo.com/720840257",
    "https://vimeo.com/720840290",
    "https://vimeo.com/720840392",
    "https://vimeo.com/720840333",
    "https://vimeo.com/720839857",
    "https://vimeo.com/720839817",

  ]

  return (
    <Container>
      <Glider slidesToShow={1} hasArrows hasDots>
        {videoURLS.map((v, index) => {
          return <VideoComponent key={index} video={v} />
        })}
      </Glider>
    </Container>
  );
}
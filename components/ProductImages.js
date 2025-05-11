import styled from "styled-components";
import { useState } from "react";

const Image = styled.img`
  max-width: 100%;
  max-height: 300%;
  border-radius: 5px;
  height: 100%;
  width: auto;
  object-fit: cover;
  cursor: pointer;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 500%;
  height: 140px;
  width: auto;
  margin-top: 10px;
  object-fit: cover; /* Ensures the image covers the area without stretching */
  @media screen and (min-width: 768px) {
    height: 300px;
  }
  /* phone screen */
  @media screen and (max-width: 768px) {
    height: 240px;
  }
`;

const ImageButtons = styled.div`
  display: flex;
  flex-grow: 0;
  margin-top: 10px;
  gap: 10px;
  justify-content: center;
  height: 60px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;

  ${(props) =>
    props.$active
      ? "border-color: #ccc;"
      : "border-color: transparent; opacity: 0.7; "}
  height: 30px;
  width: auto;
  padding: 2px;

  cursor: pointer;
  border-radius: 5px;
`;
const BigImageWrapper = styled.div`
  text-align: center;
`;

/* Overlay for full-screen image */
const FullScreenOverlay = styled.div`
  display: ${(props) => (props.$visible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullScreenImage = styled.img`
  max-width: 98%;
  max-height: 98%;
  border-radius: 10px;
  cursor: pointer;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <>
      {/* Full-Screen Overlay */}
      <FullScreenOverlay
        $visible={isFullScreen}
        onClick={() => setIsFullScreen(false)}
      >
        <FullScreenImage src={activeImage} alt="Full screen preview" />
      </FullScreenOverlay>
      <BigImageWrapper>
        <BigImage src={activeImage} onClick={() => setIsFullScreen(true)} />
      </BigImageWrapper>

      {/* Thumbnail Buttons */}
      <ImageButtons>
        {images.map((image) => (
          <ImageButton
            key={image}
            $active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}

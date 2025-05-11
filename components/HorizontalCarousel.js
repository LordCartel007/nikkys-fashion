import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CarouselContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  height: 200px;
  padding: 10px;
  background-color: #000000;
  @media screen and (max-width: 767px) {
    height: 140px;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  will-change: transform;
`;

const Image = styled.img`
  height: 180px;
  width: 150px; /* Ensure all images have the same width */
  object-fit: cover; /* Prevent stretching */
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 767px) {
    height: 120px;
    width: 100px;
  }
`;

const FullScreenOverlay = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #000;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const FullScreenImage = styled.img`
  max-width: 98%;
  max-height: 98%;
  border-radius: 10px;
`;

export default function HorizontalCarousel() {
  const [scrollAmount, setScrollAmount] = useState(0);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const wrapperRef = useRef(null);

  const images = [
    "https://cartel-next-ecommerce.s3.amazonaws.com/1740694108281.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740694036106.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740694047035.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740694089207.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740694116378.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740694133648.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740696701581.jfif",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740696717181.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740696737058.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740696764761.PNG",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740696785900.PNG",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740696800643.PNG",
    "https://cartel-next-ecommerce.s3.amazonaws.com/1740699147707.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740699154401.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740699169340.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740699175971.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740699208407.jpg",

    "https://cartel-next-ecommerce.s3.amazonaws.com/1740699237847.jpg",
  ];
  useEffect(() => {
    const scrollSpeed = 1; // Adjust speed
    const interval = setInterval(() => {
      setScrollAmount((prev) => {
        if (!wrapperRef.current) return prev;
        return prev >= wrapperRef.current.scrollWidth ? 0 : prev + scrollSpeed;
      });
    }, 18); // Adjust scrolling interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <CarouselContainer>
        <CarouselWrapper
          ref={wrapperRef}
          style={{ transform: `translateX(-${scrollAmount}px)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => setFullScreenImage(image)}
            />
          ))}
        </CarouselWrapper>
      </CarouselContainer>

      {/* Full Screen Image Viewer */}
      <FullScreenOverlay
        show={fullScreenImage}
        onClick={() => setFullScreenImage(null)}
      >
        {fullScreenImage && <FullScreenImage src={fullScreenImage} />}
      </FullScreenOverlay>
    </>
  );
}

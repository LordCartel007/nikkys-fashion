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
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012631425.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012619165.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012611338.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012581294.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012552063.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012544538.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012535929.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012484162.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012474186.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747012057277.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011940944.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011867624.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011814185.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011807146.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011582428.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011574318.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011559341.jpeg",

    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011415636.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011406420.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011397547.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011390589.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011382711.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011245951.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011238981.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011230603.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011127420.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747011114646.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747003917134.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747003978835.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747004008450.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747004040093.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747004072255.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747004080427.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747004080427.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747008927284.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747008957182.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747008988816.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747009025530.jpeg",
    "https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/1747009056421.jpeg",
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

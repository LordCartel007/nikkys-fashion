import Featured from "../components/Featured";
import Header from "../components/Header";
import { Product } from "../models/Product";
import { mongooseConnect } from "../lib/mongoose";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import HorizontalCarousel from "../components/HorizontalCarousel";
import styled from "styled-components";

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const StyledDiv = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <>
      {" "}
      <Header />
      <StyledDiv className="containervideo">
        <StyledIframe
          className="carousel"
          src="https://3d-carousel-autocartel.vercel.app/"
        />

        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/Aventador.mp4"
            type="video/mp4"
          />
        </video>
        <div className="content"></div>
      </StyledDiv>
      <div className="containervideo">
        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/Redlamborgini.Mp4.mp4"
            type="video/mp4"
          />
        </video>
        <div className="content">
          <Featured product={featuredProduct} />
          <NewProducts products={newProducts} />
        </div>
      </div>
      <HorizontalCarousel />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const featuredProductId = null;
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}

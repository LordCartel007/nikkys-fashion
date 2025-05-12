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
  height: 50vh;
`;

const StyledVideo = styled.video`
  height: 50vh;
`;

const Title = styled.h1`
  font-weight: bolder;

  margin: 0;
  color: #ffc107;
  text-decoration: none;
  font-family: "Rye", serif;
  font-weight: 400;
  font-style: normal;
  flex: 1; /* Makes title fill available space */
  justify-content: center;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 767px) {
    font-size: 3rem;
  }

  /* nest hub tv screen */
  @media screen and (min-width: 1023px) {
    font-size: 4rem;
  }
`;

const StyledTitleDiv = styled.div`
  justify-content: center;
  text-align: center;
  padding: 10px;
  margin-top: 20px;
`;

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <>
      {" "}
      <Header />
      <StyledDiv className="containervideotwo">
        <StyledVideo
          autoPlay
          loop
          muted
          playsInline
          className="background-clip"
        >
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/nikky+video+1.mp4"
            type="video/mp4"
          />
        </StyledVideo>
        <StyledTitleDiv className=" ">
          <Title> Welcome To Nikkys Fashion </Title>
        </StyledTitleDiv>
      </StyledDiv>
      <div className="containervideo">
        <video autoPlay loop muted playsInline className="background-clip">
          <source
            src="https://cartel-next-ecommerce.s3.eu-north-1.amazonaws.com/nikky+video+2.mp4"
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

import Header from "../components/Header";
import Center from "../components/Center";
import { mongooseConnect } from "../lib/mongoose";
import { Product } from "../models/Product";
import ProductsGrid from "../components/ProductsGrid";
import Title from "../components/Title";
import Footer from "../components/Footer";
import HorizontalCarousel from "../components/HorizontalCarousel";

import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #000000;
  max-width: 100%;

  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  @media screen and (max-width: 767px) {
    padding: 0 7px;
    img {
    }
  }
`;

// export default function ProductsPage({ products }) {
//   return (
//     <>
//       <Header />

//       <Center>
//         <Title>All Products</Title>
//         <ProductsGrid products={products} />
//       </Center>
//     </>
//   );
// }

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <StyledDiv>
        <Title>All Products</Title>
        <ProductsGrid products={products} showAll={true} />{" "}
        {/* Show all products */}
      </StyledDiv>
      <HorizontalCarousel />

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

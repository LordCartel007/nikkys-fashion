import Center from "../../components/Center";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { mongooseConnect } from "../../lib/mongoose";
import { Product } from "../../models/Product";
import styled from "styled-components";
import WhiteBox from "../../components/WhiteBox";
import ProductImages from "../../components/ProductImages";
import Button from "../../components/Button";
import CartIcon from "../../components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
// using toast for alerting user when product is added to cart
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const NavLink = styled(Link)`
  color: #ffc107;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  font-family: "Rye", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.7rem;
  margin-top: 10px;
`;

const Description = styled.p`
  color: #d9ecff;
  padding: 15px;
`;

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

const PriceRow = styled.div`
  color: #198754;
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>

          <div>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <PriceRow>
              <div>
                <Price>₦{product.price}</Price>
              </div>
              <div>
                <Button
                  $primary
                  onClick={() => {
                    addProduct(product._id);
                    toast.success("Added to cart!", { autoClose: 2000 }); // 2-second toast
                  }}
                >
                  <CartIcon /> Add to Cart
                </Button>
              </div>
            </PriceRow>
            {/* Toast container to display notifications */}
            <ToastContainer />
          </div>
        </ColWrapper>

        <NavLink href={"/contact"}>Contact Us</NavLink>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}

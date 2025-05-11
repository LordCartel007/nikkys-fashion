import styled from "styled-components";
import Button from "./Button";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #0e0e10;
  padding: 10px;
  height: 300px;
  width: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 230px;
    width: auto;
    height: auto;
    border-radius: 10px;
  }
  /* phone screen */
  @media screen and (max-width: 767px) {
    height: 130px;

    text-align: center;

    border-radius: 10px;

    img {
      padding: 5px;
      max-width: 100%;
      max-height: 120px;
      width: auto;
      height: auto;
      border-radius: 10px;
    }
  }

  /* nest hub tv screen */
  @media screen and (min-width: 1023px) {
    height: 230px;
    width: 100%;

    text-align: center;

    border-radius: 10px;

    img {
      padding: 5px;
      max-width: 100%;
      max-height: 210px;
      width: auto;
      height: auto;
      border-radius: 10px;
    }
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 1.5rem;
  margin: 0;
  color: #ffc107;
  text-decoration: none;
  font-family: "Rye", serif;
  font-weight: 400;
  font-style: normal;
  flex: 1; /* Makes title fill available space */

  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }

  /* nest hub tv screen */
  @media screen and (min-width: 1023px) {
    font-size: 1.1rem;
  }
`;

const ProductInfoBox = styled.div`
  border-radius: 10px;
  background-color: #0e0e10;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  flex: 1; /* Makes all product boxes take equal height */
  padding: 10px;
  min-height: 150px;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    min-height: 130px;
  }
`;

const PriceRow = styled.div`
  display: block;

  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #198754;
  text-align: left;
  background-color: white;
  border-radius: 10px;
  justify-self: center;

  background-color: #222;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
  /* nest hub tv screen */
  @media screen and (min-width: 1023px) {
    font-size: 1.1rem;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt="" />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>₦{price}</Price>
          <Button
            $block
            onClick={() => {
              addProduct(_id);
              toast.success("Added to cart!", { autoClose: 2000 }); // 2-second toast
            }}
            $primary={1}
            $outline={1}
          >
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}

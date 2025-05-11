import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { CartContext, CartContextProvider } from "./CartContext";
import { useContext } from "react";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  margin: 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    /* reversing the position of the div */
    div:nth-child(1) {
      order: 2;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
  @media screen and (min-width: 901px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const Column = styled.div`
  align-items: center;

  margin-left: 7px;
  padding: 10px;
`;

const ImgCreated = styled.img`
  max-width: 100%; /* Ensure it scales to the container width */
  border-radius: 20px;
  margin: 0 auto; /* Center within flex container */
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (min-width: 901px) {
    width: 60%;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 25px;
`;

const ImageContainer = styled.div`
  border-radius: 20px;
  overflow: hidden; /* Ensures rounded corners apply without overflow issues */
  display: inline-block;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <></>
    // <Bg>
    //   <Center>
    //     <ColumnsWrapper>
    //       <Column>
    //         <div>
    //           <Title>{product.title}</Title>
    //           <Desc>{product.description}</Desc>
    //           <ButtonsWrapper>
    //             <ButtonLink
    //               href={"/product/" + product._id}
    //               $outline={1}
    //               $white={1}
    //             >
    //               Read more
    //             </ButtonLink>
    //             <Button $white={1} onClick={addFeaturedToCart}>
    //               <CartIcon />
    //               Add to cart
    //             </Button>
    //           </ButtonsWrapper>
    //         </div>
    //       </Column>
    //     </ColumnsWrapper>
    //   </Center>
    // </Bg>
  );
}

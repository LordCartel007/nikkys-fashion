import styled from "styled-components";
import ProductBox from "./ProductBox";
import { useEffect, useState } from "react";
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
  /* nest hub tv screen */
  @media screen and (min-width: 1023px) {
    margin-top: 20px;
  }
`;

const StyledProductsGrid = styled.div`
  display: grid;

  gap: 20px;

  @media screen and (max-width: 767px) {
    margin-top: 5px;
    padding-right: 10px;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 768px) and (max-width: 1020px) {
    /* Styles for tablets */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 100px;
  }

  @media screen and (min-width: 1021px) {
    /* large screen */
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 100px;
  }
`;

// export default function ProductsGrid({ products }) {
//   return (
//     <StyledProductsGrid>
//       {products?.length > 0 &&
//         products.map((product) => (
//           <ProductBox key={product._id} {...product} />
//         ))}
//     </StyledProductsGrid>
//   );
// }

export default function ProductsGrid({ products, showAll = false }) {
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    const updateProducts = () => {
      if (showAll) {
        setVisibleProducts(products); // Show all products
      } else if (window.innerWidth <= 767) {
        setVisibleProducts(products.slice(0, 4)); // Show 1 on small screens
      } else {
        setVisibleProducts(products.slice(0, 4)); // Show 4 on larger screens
      }
    };

    updateProducts(); // Run on initial render
    window.addEventListener("resize", updateProducts);

    return () => window.removeEventListener("resize", updateProducts);
  }, [products, showAll]);

  return (
    <>
      <StyledProductsGrid>
        {visibleProducts.length > 0 &&
          visibleProducts.map((product) => (
            <ProductBox key={product._id} {...product} />
          ))}
      </StyledProductsGrid>

      <NavLink href={"/products"}>View All Products</NavLink>
    </>
  );
}

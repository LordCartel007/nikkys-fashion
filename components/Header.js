// The imports
import Link from "next/link";
import styled from "styled-components";
import Center from "../components/Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import { useState } from "react";

const StyledHeader = styled.header`
  background-color: #0e0e10;
  width: 100%;
  z-index: 100;
`;

const Logo = styled(Link)`
  color: #d9ecff;
  text-decoration: none;

  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${(props) => (props.$mobileNavActive ? "display: block;" : "display: none;")}

  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #000000; /* Slight transparency */
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  transform: ${(props) =>
    props.$mobileNavActive ? "translateX(0)" : "translateX(100%)"};

  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;

    background-color: transparent;
    transform: none;
  }
`;

const ExternalLink = styled.a`
  color: #d9ecff;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  color: #d9ecff;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavOverlay = styled.div`
  display: ${(props) => (props.$mobileNavActive ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000; /* Dark overlay */
  z-index: 999;
`;
export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Nikkys Fashion</Logo>
          <NavOverlay
            $mobileNavActive={mobileNavActive}
            onClick={() => setMobileNavActive(false)}
          />

          <StyledNav $mobileNavActive={mobileNavActive}>
            <NavLink href={"/"} onClick={() => setMobileNavActive(false)}>
              Home
            </NavLink>
            <NavLink
              href={"/products"}
              onClick={() => setMobileNavActive(false)}
            >
              All Products
            </NavLink>
            <NavLink
              href={"/contact"}
              onClick={() => setMobileNavActive(false)}
            >
              Contact Us
            </NavLink>
            {/* Link to chat web app */}
            <ExternalLink href="https://chat.autocartel.shop/">
              Message Us
            </ExternalLink>
            <NavLink href={"/cart"} onClick={() => setMobileNavActive(false)}>
              Cart ({cartProducts.length})
            </NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

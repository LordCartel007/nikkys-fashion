import styled, { css } from "styled-components";
import { primary } from "../lib/colors";

export const ButtonStyle = css`
  border: 0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-weight: 500;

  svg {
    height: 16px;
    margin-right: 5px;
  }

  ${(props) =>
    props.$block &&
    css`
      display: block;
      width: 100%;
    `}
  ${(props) =>
    props.$black &&
    !props.$outline &&
    css`
      background-color: #000;
      color: #fff;
    `}

  ${(props) =>
    props.$black &&
    props.$outline &&
    css`
      background-color: transparent;
      color: #000;
      border: 2px solid #000;
    `}



  ${(props) =>
    props.$white &&
    !props.$outline &&
    css`
      background-color: #fff;
      color: #000;
    `}

  ${(props) =>
    props.$white &&
    props.$outline &&
    css`
      background-color: transparent;
      color: #fff;
      border: 2px solid #fff;
    `}

  ${(props) =>
    props.$primary &&
    !props.$outline &&
    css`
      background-color: ${primary};
      color: #fff;
      border: 2px solid ${primary};
    `}

    ${(props) =>
    props.$primary &&
    props.$outline &&
    css`
      background-color: transparent;
      color: ${primary};
      border: 2px solid ${primary};
    `}

  ${(props) =>
    props.size === "l" &&
    css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg {
        height: 20px;
      }
    `}
    @media screen and (max-width: 767px) {
    font-size: 12px;
  }

  /* Medium screens (tablets) */
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 12px;
  }

  /* Large screens (desktops) */
  @media screen and (min-width: 1025px) {
  }
`;

const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({ children, $primary, ...rest }) {
  return (
    <StyledButton $primary={$primary} {...rest}>
      {children}
    </StyledButton>
  );
}

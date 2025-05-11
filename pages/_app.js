import { createGlobalStyle } from "styled-components";
import { CartContextProvider } from "../components/CartContext";
import "../styles/videobackground.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyles = createGlobalStyle`

 body{
  background-color: #000000;
  padding:0;
  margin:0;
  font-family: "poppins", sans-serif;
 }
 `;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </CartContextProvider>
    </>
  );
}

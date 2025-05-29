import Link from "next/link";
import styled from "styled-components";
import Center from "../components/Center";
import { FaFacebook, FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import Header from "../components/Header";
const ContactWrapper = styled.div`
  margin-top: 40px;
  background-color: #0e0e10;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  border-radius: 10px;
`;

const ContactTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  font-size: 18px;
  margin: 10px 0;
`;

const PhoneLink = styled.a`
  color: #1db954; /* Green color */
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const WhatsAppLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #25d366; /* WhatsApp Green */
  font-size: 18px;
  text-decoration: none;
  gap: 10px;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const FacebookLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0866ff; /* Facebook blue */
  font-size: 18px;
  text-decoration: none;
  gap: 10px;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactWrapper>
        <Center>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactItem>
            📞 Call Us:{" "}
            <PhoneLink href="tel:+2347033127669">+2349039195457</PhoneLink>
          </ContactItem>
          <ContactItem>
            <WhatsAppLink href="https://wa.link/c9mv6b" target="_blank">
              <FaWhatsapp size={24} /> Chat on WhatsApp
            </WhatsAppLink>
            <FacebookLink
              href="https://web.facebook.com/profile.php?id=61572282755749"
              target="_blank"
            >
              <FaFacebook size={24} /> Our facebook page
            </FacebookLink>
          </ContactItem>
          <ContactItem>
            Our boutique store is located at 23 festac road Lagos
          </ContactItem>
        </Center>
      </ContactWrapper>
    </>
  );
}

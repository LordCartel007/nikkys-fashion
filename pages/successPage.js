import Header from "../components/Header";
import Center from "../components/Center";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.3fr 0.7fr;
  }
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

export default function successPage() {
  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h1>Thanks for your order!</h1>
            <p>We will email you when your order will be sent</p>
          </Box>
        </ColumnsWrapper>
      </Center>
    </>
  );
}

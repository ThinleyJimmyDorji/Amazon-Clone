import React from "react";
import styled from "styled-components";

function Checkout() {
  return (
    <Container>
      <CheckoutLeft>
        <img
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt=""
        />
        <Heading> Your Shopping Basket</Heading>
        <BasketList>
          <ImageContainer>
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
              alt=""
            />
          </ImageContainer>
          <Info>
            <Title>The Lean Startup</Title>
            <Price>
              <span>$</span>
              <strong>99.9</strong>
            </Price>
            <Rating>
              <p>🌟</p>
            </Rating>
            <Button>Remove from basket</Button>
          </Info>
        </BasketList>
      </CheckoutLeft>
      <CheckoutRight></CheckoutRight>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
`;
const CheckoutLeft = styled.div`
  width: 100%;
  max-height: 90%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
  }
`;
const Heading = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding-bottom: 15px;

`;
const BasketList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 10px;
  padding-bottom: 20px;
`;
const CheckoutRight = styled.div`
  width: 100%;
  height: 20px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 200px;
    height: 250px;
    object-fit: contain;
  }
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.div`
  margin: 10px 0px;
`;
const Price = styled.div``;
const Rating = styled.div``;
const Button = styled.div`
  background-color: #e9c46a;
  padding: 4px 8px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  margin: 30px 0px;
  cursor: pointer;

  &:hover {
    background-color: #f6bd60;
  }
`;

export default Checkout;

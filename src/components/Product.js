import React from "react";
import styled from "styled-components";

function Product({ title, rating, price, image }) {
  return (
    <Container>
      <ProductInfo>
        <Title>{title}</Title>
        <Price>
          <span>$</span>
          <strong>{price}</strong>
        </Price>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </Rating>
        <img src={image} alt="" />
      </ProductInfo>
      <Button>Add to cart</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  margin: 20px;
  width: 80%;
  max-height: 400px;
  background-color: #ffff;
  /* z-index: 1; */
`;
const ProductInfo = styled.div`
  height: 400px;
  width: 150px;
  max-width: 150px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img{
    max-height: 250px;
  }
`;
const Title = styled.div``;
const Price = styled.div`
  margin-top: 5px;
`;
const Rating = styled.div`
display: flex;
`;
const Image = styled.div`
  img {
    width: 100%;
    max-height: 100px;
    object-fit: contain;
  }
`;
const Button = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e9c46a;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  padding: 2px 10px;
  cursor: pointer;
  &:hover {
    background-color: #f6bd60;
  }
`;

export default Product;

import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateItem } from "../actions";

const Main = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  .disable {
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid white;
  text-align: center;
  padding: 0px 10px 10px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0px 0px 5px 0px;
  }
`;

const Button = styled.div`
  border-radius: 3px;
  background-color: #f34f40;
  color: white;
  padding: 10px;
  width: 50%;
  box-shadow: -3px 3px 7px -2px rgba(243, 79, 64, 0.342);
  transition-duration: 0.5s;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: #d6837c;
  }
`;

const SvgImage = styled.img`
  width: 50px;
`;

export default function StoreItems() {
  const products = useSelector((state) => state.superMarketReducer.products);
  const dispatch = useDispatch();

  function buyItem(index) {
    let productsResult = [...products];

    productsResult[index].quantity > 0
      ? (productsResult[index].quantity = productsResult[index].quantity - 1)
      : (productsResult[index].quantity = 0);

    dispatch(updateItem(productsResult));
  }

  return (
    <Main>
      {products.map((el, index) => (
        <Card key={index} className={el.quantity === 0 && `disable`}>
          <h3>{el.name}</h3>
          <SvgImage src={el.image} alt={el.name} />
          <p>{el.shortDescription}</p>
          <Button onClick={() => buyItem(index)}>Comprar</Button>
        </Card>
      ))}
    </Main>
  );
}

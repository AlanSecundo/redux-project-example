import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Main = styled.div`
  text-align: left;
`;

const TD = styled.td`
  text-align: center;
`;

export default function StoreView() {
  const products = useSelector((state) => state.superMarketReducer.products);

  return (
    <Main>
      <h2>STORE(Redux):</h2>
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Quantidade</th>
          </tr>
          {products.map((el, index) => (
            <tr key={index}>
              <td>{el.name}: </td>
              <TD>{el.quantity}</TD>
            </tr>
          ))}
        </tbody>
      </table>
    </Main>
  );
}

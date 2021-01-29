import StoreView from "./components/StoreView";
import styled from "styled-components";
import StoreItems from "./components/StoreItems";
import React from 'react'

const AppDiv = styled.div`
  color: white;
  padding: 0 15px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`;

const LeftSide = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

const StoreArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
  padding-bottom: 10px;
`;

const RightSide = styled.div`
  grid-column-start: 3;
  grid-column-end: 12;
`;

const Header = styled.header`
  text-align: center;
`;

const Conclusion = styled.div`
  padding: 2% 0 0 4%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 70%;
`;

const ConclusionLeft = styled.div`
  font-size: 70%;
  padding-top: 3%;
`

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 15px;
  font-size: 60%;
  width: 100%;
  text-align: center;
`

const Link = styled.a`
  text-decoration: none;
  color: white;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

export default function App() {

  return (
    <div>
      <AppDiv>
        <Header>
          <h1>React utilizando Redux - Exemplo básico</h1>
        </Header>
        <GridContainer>
          <LeftSide>
            <StoreArea>
              <StoreView />
            </StoreArea>
          </LeftSide>
          <RightSide>
            <StoreItems />
          </RightSide>
        </GridContainer>
        <GridContainer>
          <LeftSide>
            <ConclusionLeft>
              <span>
                Neste lado da dela, você pode ver os valores que temos
                armezanados na nossa Store criada com a ajuda do Redux
              </span>
            </ConclusionLeft>
          </LeftSide>
          <RightSide>
            <Conclusion>
              <span>
                Aqui acima, ao clicar em um botão de compra, você está
                disparando um evento que realiza uma mudança na nossa Store,
                note a esquerda, como cada clique reflete na alteração do
                componente com os items listados.
              </span>
            </Conclusion>
          </RightSide>
        </GridContainer>
        <Footer>
          <Link href="https://www.alansecundo.com/br/" target="blank" >Created By Alan Secundo</Link>
        </Footer>
      </AppDiv>
    </div>
  );
}

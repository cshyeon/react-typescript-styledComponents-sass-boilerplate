import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'components';

import { ReactComponent as HeartIcon } from '../../assets/images/icons/heart.svg';

const HEADER_HEIGHT = 200;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  height: ${HEADER_HEIGHT}px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const StartMenu = styled.div`
  background-color: ${(props) => props.theme.color.sub};
  padding: 20px 5px;
  // height: calc(100vh - ${HEADER_HEIGHT}px - 40px);
`;

const StartButton = styled(Button)`
  width: 180px;
  padding: 12px 30px;
`;

const CardCollection = styled.section`
  display: flex;
  justify-content: center;
  padding: 26px 0 64px 0;

  box-sizing: border-box;
  border: 1px solid purple;
  width: 100%;
  background-color: #e0ece4;
  color: black;

  ${(props) => props.theme.media.desktop`
    background-color: black;
  `}

  ${(props) => props.theme.media.tablet`
    background-color: blue;
  `}

  ${(props) => props.theme.media.mobile`
    background-color: red;
  `}
`;

const ItemCard = styled(Card)`
  width: 23%;

  margin: 1rem 1%;
  height: 380px;

  font-size: 1rem;
  font-weight: normal;

  & .title {
    height: 50px;
  }
  & .content {
    height: calc(380px - 50px - 50px);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #06181f;

    .icon {
      width: 100px;
      stroke: #ffffff;
      fill: red;
    }
  }
  & .footer {
    height: calc(380px - 50px - 280px);
  }
`;

const Home: React.FC<{}> = () => {
  return (
    <div className="home">
      <Header>
        <Title>React + typescript + react-router-dom + styled-components + sass</Title>
        <p>Boilerplate</p>
      </Header>

      <StartMenu>
        <StartButton onClick={() => (window.location.href = '/about')}>About</StartButton>
        <StartButton>Click button</StartButton>
      </StartMenu>

      <CardCollection>
        <ItemCard>
          <div className="title">title</div>
          <div className="content">
            <HeartIcon className="icon heart" />
          </div>
          <div className="footer">footer</div>
        </ItemCard>
        <ItemCard>
          <div className="title">title</div>
          <div className="content"></div>
          <div className="footer">footer</div>
        </ItemCard>
      </CardCollection>
    </div>
  );
};

export default Home;

import React from 'react';
import styled from 'styled-components';


const DefaultCard = styled.div`
  position: relative;
  width: 48%;
  margin: 0.5rem 1%;

  font-family: inherit;
  font-weight: inherit;

  box-shadow: 0 1px 4px 0px grey; 

  background-color: ${props => props.theme.color.cardBg};

  transition: transform .1s;
`

type CardProps = {
  // All other props
  [anything:string]: any;
}


const Card: React.FC<CardProps> = ({children, onClick, ...restProps}) => {

  return (
    <DefaultCard {...restProps}>
      {children}
    </DefaultCard>
  )
}

export default Card;
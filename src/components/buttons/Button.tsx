import React, {useRef} from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  position: relative;

  font-family: inherit;
  font-weight: inherit;

  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0px grey; 

  background-color: ${props => props.theme.color.buttonBG};

  transition: transform .1s;

  &:hover {
    border: 2px solid gray;
  }
  &:active {
    transform: translate(0, 2px);
  }
`

type ButtonProps = {
  // All other props
  [anything:string]: any;
}


const Button: React.FC<ButtonProps> = ({children, onClick, ...restProps}) => {
  const buttonEl = useRef<HTMLButtonElement | null>(null);

  const clickListener = (e: any) => {
    if(onClick) {
      onClick(e);
    }
  }
  return (
    <DefaultButton ref={buttonEl} onClick={clickListener} {...restProps}>
      {children}
    </DefaultButton>
  )
}

export default Button;
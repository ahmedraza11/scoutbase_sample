import React from 'react';
import { Container } from './';

import Styled from 'styled-components';


const CardWrapper = Styled.div`
  width: auto;
	padding: 20px;
	margin: 30px;
	height: auto;
	border-radius: 5px;
	background-color: ${props => props.bgColor || "#FFD54F"};
	box-shadow: -1px 1px 20px -1px rgba(0,0,0,0.75);
	-webkit-box-shadow: -1px 1px 20px -1px rgba(0,0,0,0.75);
	-moz-box-shadow: -1px 1px 20px -1px rgba(0,0,0,0.75);	
`

export const Card = ({ children, bgColor }) => {
	return (
		<CardWrapper bgColor={bgColor}>
			<Container>
				{children}
			</Container>
		</CardWrapper>
	)
}
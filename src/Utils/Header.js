import React from "react";

import Styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";

const Wrapper = Styled.div`
  width: 100%;
  height: 60px;
  margin: 0px;
  display: flex !important;
	align-items: center;
  background-color: #525252;
	-webkit-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.53);
	-moz-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.53);
	box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.53);
`;

const List = Styled.ul`
	display: flex;
	flex-direction: row;
`;

const Item = Styled.li`
	display:flex;
	color: #fff;
	margin-right: 10px;
	transition: all 0.3s;
	text-decoration: none;
	&&:hover {
		color: #FFD54F;
		cursor: pointer;
	}
`;
const Link = Styled(RouteLink)`
	text-decoration: none;
`;

export const Header = ({ routes }) => {
  return (
    <Wrapper>
      <List>
        {routes.map((val, i) => (
          <Link key={i} to={val.link}>
            <Item key={i}>{val.name}</Item>
          </Link>
        ))}
      </List>
    </Wrapper>
  );
};

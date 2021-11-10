import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Havola = styled(Link)`
  color: ${(props) => (props.to === "/" ? "yellow" : "inherit")};
  text-decoration: none;
  background-color: ${(props) => (props.omad ? "green" : "blue")};
  display: inline-block;
  width: ${(props) => (props.total < 10 ? "200px" : "500px")};
`;

const LinkBtn = (props) => {
  return (
    <Havola omad={false} total={15} to={props.href}>
      {props.children}
    </Havola>
  );
};

export default LinkBtn;

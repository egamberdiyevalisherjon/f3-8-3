import "./App.css";
import styled from "styled-components";
import LinkBtn from "./Components/LinkBtn";
import { Button, DatePicker } from "antd";

function App() {
  return (
    <div className="App">
      <input type="date" name="" id="" />
      <DatePicker />
      {/* STYLED-COMPONENTS
      <LinkBtn href="/">Home</LinkBtn>
      <LinkBtn href="/about">About</LinkBtn> */}
      <Button type="primary" danger loading={true} shape="round">
        Salom
      </Button>
      {/* <Square>
        <h1>Salom</h1>
      </Square> */}
    </div>
  );
}

export default App;

export const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  border: 1px solid black;
  box-shadow: 0 0 5px #333;
  color: #fff;
`;

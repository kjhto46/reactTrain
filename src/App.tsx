import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle bordercolor="blue" bgcolor='red'/>
      <Circle bgcolor='skyblue' text="props로 텍스트 있을때"/>
    </div>
  );
}

export default App;

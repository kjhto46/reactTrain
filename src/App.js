import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: orange;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;
const rotateAni = keyframes`
0% {transform:rotate(0deg);
border-radius:0px;}
50% {border-radius:50px;}
100% {transform:rotate(360deg);
  border-radius:0px;}
`;

const Box = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  width: 100px;
  height: 100px;
  background: red;
  animation: ${rotateAni} 1s linear infinite;
  span {
    font-size:36px;
    &:hover {
      font-size:40px;
    }
  }
`;

function App() {
  return (
    <div>
      <Father>
        <Btn>로그인</Btn>
        <Btn as="a">로그인</Btn>
        <Input />
      </Father>
      <Box>
        <span>🥰</span>
        </Box>
    </div>
  );
}

export default App;

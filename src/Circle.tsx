import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgcolor: string;
  bordercolor: string;
}

const Container = styled.div<ContainerProps>`
  display:flex;
  justify-content: center;
  align-items:center;
  width: 200px;
  height: 200px;
  background: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.bordercolor};
  border-radius:50%;
`;

interface CircleProps {
  bgcolor: string;
  bordercolor?: string;
  text?: string;
}

function Circle({ bgcolor, bordercolor, text = "기본값" }: CircleProps) {
  return (
    <Container bgcolor={bgcolor} bordercolor={bordercolor ?? bgcolor}>
      {text}
    </Container>
  );
}

export default Circle;

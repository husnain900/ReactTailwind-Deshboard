import React from 'react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  
  70% {
    transform: scale(1);
    opacity: 0.3;
  }
  
  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

const Circle = styled.div`
  display: inline-block;
  height: 16px;
  width: 16px;
  margin-right:-4px;
  background-color: red;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
`;

function PulsingCircleIcon() {
  return <Circle />;
}

export default PulsingCircleIcon;

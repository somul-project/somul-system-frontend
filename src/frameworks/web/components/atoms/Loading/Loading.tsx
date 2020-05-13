import styled from 'styled-components';
import theme from 'theme';
import React from 'react';

const LoadingBarrier = styled.div`
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  overflow: hidden;
  z-index: 9999;
  background: rgba(255, 255, 255, 0.3);
  position: fixed;
  pointer-events: none;
`;

const LoadingComponent = styled.div`
  width: 48px;
  height: 48px;

  z-index: 9999;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  -webkit-animation: circle infinite 0.75s linear;
  -moz-animation: circle infinite 0.75s linear;
  -o-animation: circle infinite 0.75s linear;
  animation: circle infinite 0.75s linear;

  border: 2px solid ${theme.color.primary.Azure};
  border-top-color: transparent;
  border-radius: 100%;

  @-webkit-keyframes circle {
    0% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes circle {
    0% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes circle {
    0% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes circle {
    0% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default function Loading(): React.ReactElement {
  return (
    <LoadingBarrier>
      <LoadingComponent />
    </LoadingBarrier>
  );
}

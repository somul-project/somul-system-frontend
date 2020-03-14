import styled from 'styled-components';

interface IContentsBox {
  width: string
  height: string
  bgDark: boolean
}

const ContentsBox = styled.div`
  width: ${(props: IContentsBox) => props.width ?? '200px'};
  height: ${(props: IContentsBox) => props.height ?? '200px'};
  box-shadow: 0 5px 30px 0 rgba(155, 155, 155, ${(props: IContentsBox) => (props.bgDark ? '0.1' : '0.2')});
  background-color: white;
  border-radius: 25px;
`;

export { ContentsBox as default };

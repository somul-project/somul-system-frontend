import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { IContentsBox } from 'interfaces/frameworks/web/components/atoms/ContentsBox/IContentsBox';

const ContentsBox = styled.div`
  width: ${(props: IContentsBox) => props.width ?? 200}px;
  height: ${(props: IContentsBox) => props.height ?? 200}px;
  box-shadow: 0 5px 30px 0 rgba(155, 155, 155, ${(props: IContentsBox) => (props.isDarkBackground ? '0.1' : '0.2')});
  background-color: white;
  border-radius: 25px;
`;

export { ContentsBox as default };

import styled from 'styled-components';
import theme from 'theme';

const Tag = styled.span`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: white;
  padding: 2px 8px;
  margin: 4px;
  border-radius: 8px;
  height: 28px;
  background-color: ${(props) => props.color ?? theme.color.secondary.Moon};
`;

export { Tag as default };

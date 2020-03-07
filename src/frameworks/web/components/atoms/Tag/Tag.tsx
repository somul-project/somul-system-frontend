import styled from 'styled-components';
import theme from 'theme';

export const BaseTag = styled.span`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: white;
  padding: 4px 8px 4px 8px;
  border-radius: 8px;
`;

export const AcceptTag = styled(BaseTag)`
  background-color: ${theme.color.alert.Success};
`;

export const PendingTag = styled(BaseTag)`
  background-color: ${theme.color.secondary.Moon};
`;

export const UnacceptTag = styled(BaseTag)`
background-color: ${theme.color.alert.Failure};
`;
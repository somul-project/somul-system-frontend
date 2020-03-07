import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

import { ITag } from 'src/interfaces/frameworks/web/components/atoms/Tag/ITag'

export const BaseTag = styled.span`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  color: white;
  padding: 4px 8px 4px 8px;
  border-radius: 8px;
`;

export const DefaultTag = styled(BaseTag)`
  background-color: ${(props) => props.color ?? theme.color.primary.Black};;
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

const TAGS = {
  accept: AcceptTag,
  pending: PendingTag,
  unaccept: UnacceptTag,
  default: DefaultTag,
};

export default class Button extends React.PureComponent<ITag> {
  render() {
    const {
      type, label, color
    } = this.props;

    const TagComponent = TAGS[type ?? 'default'];

    return <TagComponent color={color}>{label}</TagComponent>;
  }
}
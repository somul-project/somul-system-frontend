import styled from 'styled-components';
import theme from 'theme';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { ILabel, ILabelMark } from 'interfaces/frameworks/web/components/atoms/Label/ILabel';

const BaseLabel = styled.p`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  margin: 0;
  color: ${(props) => props.color ?? theme.color.primary.Black};
`;

const LabelH1 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 60px;
  letter-spacing: -0.9px;
  line-height: 86px;
`;

const LabelH2 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 48px;
  letter-spacing: -0.72px;
  line-height: 68px;
`;

const LabelH3 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 32px;
  letter-spacing: -0.48px;
  line-height: 48px;
`;

const LabelH4 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.36px;
  line-height: 36px;
`;

const LabelH5 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
`;

const LabelH6 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
`;

const LabelP1 = styled(BaseLabel)`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
`;

const LabelP2 = styled(BaseLabel)`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
`;

const LabelMark = styled.mark`
  display: inline-block;
  line-height: ${(props: ILabelMark) => ((props.mark === 'full') ? -1 : 0)}em;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: ${(props: ILabelMark) => ((props.mark === 'full') ? 0 : 0.7)}em;
  border-radius: 1em;
  background-color: ${(props: ILabelMark) => props.markColor ?? theme.color.alert.Warning};
`;

const LABEL = {
  H1: LabelH1,
  H2: LabelH2,
  H3: LabelH3,
  H4: LabelH4,
  H5: LabelH5,
  H6: LabelH6,
  P1: LabelP1,
  P2: LabelP2,
};

export default class Label extends React.PureComponent<ILabel> {
  render() {
    const {
      type, mark, markColor, children,
    } = this.props;
    let label = children;
    const LabelComponent = LABEL[type];

    if (typeof mark !== 'undefined' && mark !== 'none') {
      label = <LabelMark mark={mark} markColor={markColor}>{label}</LabelMark>;
    }
    return <LabelComponent>{label}</LabelComponent>;
  }
}

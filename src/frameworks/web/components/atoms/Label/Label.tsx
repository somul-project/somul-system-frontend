import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

import { ILabel, ILabelMark } from 'interfaces/frameworks/web/components/atoms/Label/ILabel';

const BaseLabel = styled.p`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  margin: 0;
  color: ${(props: ILabel) => props.color ?? theme.color.primary.Black};
  ${(props: ILabel) => (typeof props.onClick !== 'undefined' ? 'cursor: pointer;' : '')}
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

const MobileLabelH1 = styled(BaseLabel)`
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -0.54;
  line-height: 50px;
`;

const MobileLabelH2 = styled(BaseLabel)`
  font-weight: 700;
  font-size: 21px;
  letter-spacing: -0.2;
  line-height: 32px;
`;

const MobileLabelP2 = styled(BaseLabel)`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0;
  line-height: 22px;
`;

const LabelMark = styled.mark`
  line-height: ${(props: ILabelMark) => (props.mark === 'full' ? -1 : 0)}em;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: ${(props: ILabelMark) => (props.mark === 'full' ? 0 : 0.7)}em;
  border-radius: 1em;
  background-color: ${(props: ILabelMark) => props.markColor ?? theme.color.alert.Warning};
  box-decoration-break: clone;
  ${(props: ILabelMark) => (props.mark === 'underline' ? 'display: inline-block;' : '')}
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
  MobileH1: MobileLabelH1,
  MobileH2: MobileLabelH2,
  MobileH3: LabelH5,
  MobileH4: LabelH6,
  MobileP1: LabelP2,
  MobileP2: MobileLabelP2,
};

export default function Label({
  type = 'P1',
  mark,
  markColor,
  onClick,
  color,
  style,
  children = null,
}: ILabel): React.ReactElement {
  let label = children;
  const LabelComponent = LABEL[type];

  if (typeof mark !== 'undefined' && mark !== 'none') {
    label = (
      <LabelMark mark={mark} markColor={markColor}>
        {label}
      </LabelMark>
    );
  }
  return (
    <LabelComponent onClick={onClick} color={color} mark={mark} style={style}>
      {label}
    </LabelComponent>
  );
}

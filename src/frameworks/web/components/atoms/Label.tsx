import styled from "styled-components";
import theme from "../../../../theme";

export const BaseLabel = styled.p`
  font-family: 'Muli', 'Noto Sans KR', sans-serif;
  margin: 0;
  color: ${props => props.color ?? theme.color.primary.Black};
`;

export const LabelH1 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 60px;
  letter-spacing: -0.9px;
  line-height: 86px;
`;

export const LabelH2 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 48px;
  letter-spacing: -0.72px;
  line-height: 68px;
`;

export const LabelH3 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 32px;
  letter-spacing: -0.48px;
  line-height: 48px;
`;

export const LabelH4 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -0.36px;
  line-height: 36px;
`;

export const LabelH5 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0px;
  line-height: 26px;
`;

export const LabelH6 = styled(BaseLabel)`
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
`;

export const LabelP1 = styled(BaseLabel)`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 26px;
`;

export const LabelP2 = styled(BaseLabel)`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
`;

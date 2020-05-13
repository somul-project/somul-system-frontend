import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import { ISingleCard } from 'interfaces/frameworks/web/components/molecules/SingleCard/ISingleCard';

const CardContainer = styled(ContentsBox)`
  width: 730px;
  height: auto;
  padding: 64px 0 64px 0;
  margin: 0 auto;
  background-color: white;
  text-align: center;
`;

const ContextContainer = styled.div`
  margin: 72px 0;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const EachButtonContainer = styled.div`
  display: inline-block;
  margin: 0 15px 0 15px;
`;

export default function SingleCard({
  title,
  children,
  buttonLabel,
  buttonOnClick,
}: ISingleCard): React.ReactElement {
  return (
    <CardContainer isDarkBackground={false}>
      <Label type="H4" color={theme.color.primary.Azure}>
        {title}
      </Label>
      <ContextContainer>{children}</ContextContainer>
      <ButtonContainer>
        {buttonLabel.map((label, i) => (
          <EachButtonContainer key={label}>
            <Button
              label={label}
              isPrimary={i === buttonLabel.length - 1}
              onClick={buttonOnClick[i]}
            />
          </EachButtonContainer>
        ))}
      </ButtonContainer>
    </CardContainer>
  );
}

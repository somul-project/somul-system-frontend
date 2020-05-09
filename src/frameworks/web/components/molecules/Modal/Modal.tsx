/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styled from 'styled-components';
import React, { ReactNode } from 'react';
// import theme from 'theme';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
// eslint-disable-next-line no-unused-vars
import {
  IModal,
  IModalContainer,
} from 'interfaces/frameworks/web/components/molecules/Modal/IModal';
import theme from 'theme';

const ModalBackground = styled.div`
  display: ${(props: IModalContainer) => (props.isDisplay ? 'flex' : 'none')};
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(ContentsBox)`
  width: 540px;
  padding: 48px 65px;
  background-color: white;
  margin: 0 auto;
  text-align: center;
`;

const TopXButtonTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  margin-bottom: 40px;
`;

const ModalContentContainer = styled.div`
  text-align: left;
`;

const ModalButtonContainer = styled.div`
  display: flex;
`;

const EachButtonContainer = styled.div`
  display: inline-block;
  margin-right: 24px;
`;

export default function Modal({
  children,
  isDisplay = false,
  onClose,
  type,
  title = '',
  buttonLabel,
  buttonOnClick,
}: IModal): React.ReactElement {
  let CardContent: ReactNode;
  if (type === 'top-x-button') {
    CardContent = (
      <div>
        <TopXButtonTitleContainer>
          <Label type="H4" color={theme.color.primary.Azure} style={{ textAlign: 'left' }}>
            {title}
          </Label>
          <img
            src="icon/x.svg"
            alt="닫기"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={() => onClose()}
          />
        </TopXButtonTitleContainer>
        <ModalContentContainer style={{ marginBottom: '16px' }}>{children}</ModalContentContainer>
      </div>
    );
  } else if (type === 'bottom-button') {
    const buttonElements: ReactNode[] = [];
    if (buttonLabel !== undefined) {
      buttonElements.push(
        <EachButtonContainer>
          <Button label={buttonLabel!} type="field" isPrimary={false} onClick={buttonOnClick!} />
        </EachButtonContainer>,
      );
    }
    buttonElements.push(<Button type="field" label="닫기" isPrimary onClick={() => onClose()} />);
    CardContent = (
      <div>
        <Label type="H4" color={theme.color.primary.Azure}>
          {title}
        </Label>
        <ModalContentContainer style={{ margin: '40px 0' }}>{children}</ModalContentContainer>
        <ModalButtonContainer>{buttonElements}</ModalButtonContainer>
      </div>
    );
  } else {
    CardContent = (
      <div>
        {children}
        <Button type="field" label="닫기" isPrimary onClick={() => onClose()} />
      </div>
    );
  }
  return (
    <ModalBackground isDisplay={isDisplay}>
      <CardContainer isDarkBackground>{CardContent}</CardContainer>
    </ModalBackground>
  );
}

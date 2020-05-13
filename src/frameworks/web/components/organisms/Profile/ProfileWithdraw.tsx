import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';

const CardContainer = styled(ContentsBox)`
  width: 730px;
  height: auto;
  padding: 64px 0 64px 0;
  margin: 0 auto;
  background-color: white;
  text-align: center;
`;

const ContextContainer = styled.div`
  margin: 40px 0;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 48px;
`;

const EachButtonContainer = styled.div`
  display: inline-block;
  margin: 0 15px 0 15px;
`;

const ProfileWithdraw = () => {
  const [checkText, setCheckText] = useState('');
  const history = useHistory();

  const onTextValueChange = (data: string) => {
    setCheckText(data);
  };

  const onCancleButtonClicked = () => {
    history.goBack();
  };

  const onDeleteButtonClicked = () => {
    // 계정 삭제 로직 추가
  };
  return (
    <CardContainer isDarkBackground={false}>
      <Label type="H4" color={theme.color.primary.Azure}>
        계정 삭제
      </Label>
      <ContextContainer>
        <Label type="P1" color={theme.color.secondary.Moon} style={{ marginTop: '24px' }}>
          계정을 삭제하시면 해당 홈페이지와 관련된 서비스를 이용할 수 없으며,
        </Label>
        <Label type="P1" color={theme.color.secondary.Moon}>
          작성중인 신청폼이 모두 없어집니다. 계정 삭제를 완료하시려면
        </Label>
        <Label type="P1" color={theme.color.secondary.Moon}>
          아래 빈칸에 <span style={{ color: '#F5503D', fontWeight: 'bold' }}>삭제하겠습니다</span>를
          입력해주세요.
        </Label>
      </ContextContainer>
      <TextField
        defaultLabel="삭제하겠습니다"
        onValueChange={onTextValueChange}
        style={{ width: '350px', margin: '0 auto' }}
      />
      <ButtonContainer>
        <EachButtonContainer>
          <Button label="취소" onClick={onCancleButtonClicked} />
        </EachButtonContainer>
        <EachButtonContainer>
          <Button
            label="삭제하기"
            isPrimary
            isEnabled={checkText === '삭제하겠습니다'}
            onClick={onDeleteButtonClicked}
          />
        </EachButtonContainer>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ProfileWithdraw;

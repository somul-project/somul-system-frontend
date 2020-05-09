import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';

const MiddleContainer = styled.div`
  width: 379px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const TextLabelContainer = styled.div`
  width: 94px;
  text-align: right;
`;

const TextFieldContainer = styled.div`
  width: 250px;
`;

export default function ChangePassword(): React.ReactElement {
  const [newPassword, setNewPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  const history = useHistory();

  const goComplete = () => {
    history.push('/signin/change-complete');
  };

  return (
    <SingleCard title="Change Password" buttonLabel={['변경하기']} buttonOnClick={[goComplete]}>
      <MiddleContainer>
        <TextLabelContainer>
          <Label type="H5" color={theme.color.secondary.Moon} style={{ margin: '16px 0 56px 0' }}>
            새 비밀번호
          </Label>
          <Label type="H5" color={theme.color.secondary.Moon}>
            비밀번호 확인
          </Label>
        </TextLabelContainer>
        <TextFieldContainer>
          <TextField
            value={newPassword}
            defaultLabel="새 비밀번호를 입력하세요"
            onValueChange={(value) => setNewPassword(value)}
            style={{ width: 'auto', marginBottom: '24px' }}
            type="password"
          />
          <TextField
            value={checkPassword}
            defaultLabel="비밀번호를 다시 한번 입력하세요"
            onValueChange={(value) => setCheckPassword(value)}
            style={{ width: 'auto' }}
            type="password"
          />
        </TextFieldContainer>
      </MiddleContainer>
    </SingleCard>
  );
}

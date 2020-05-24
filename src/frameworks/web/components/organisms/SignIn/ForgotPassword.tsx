import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import theme from 'theme';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';

import * as Valid from 'utils/validator';
import * as ROUTES from 'utils/routes';

const WarningTextContainer = styled.div`
  float: right;
  display: flex;
  align-items: center;
  margin-top: 6px;
`;

export default function ForgotPassword(): React.ReactElement {
  const [email, setEmail] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);

  const history = useHistory();

  const handleChangeEmail = (value: string) => {
    setValid(true);
    setEmail(value);
  };

  const goComplete = () => {
    const result = Valid.isEmail(email);
    setValid(result);

    if (result) {
      history.push(ROUTES.SIGN_IN_FORGOT_PASSWORD, { email });
    }
  };

  return (
    <SingleCard title="Forgot Password?" buttonLabel={['전송하기']} buttonOnClick={[goComplete]}>
      <Label type="H5" color={theme.color.secondary.Nickel}>
        가입된 이메일을 입력하세요.
      </Label>
      <div style={{ width: '350px', margin: '24px auto 0 auto' }}>
        <TextField
          value={email}
          defaultLabel="example@somul.kr"
          onValueChange={handleChangeEmail}
          style={{ width: 'auto' }}
        />
        {email && !valid && (
          <WarningTextContainer>
            <Label type="P2" color={theme.color.alert.Failure}>
              유효한 메일을 입력해주세요.
            </Label>
          </WarningTextContainer>
        )}
      </div>
    </SingleCard>
  );
}

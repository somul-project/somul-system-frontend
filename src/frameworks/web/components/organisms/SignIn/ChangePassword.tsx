import React from 'react';
import theme from 'theme';
import styled from 'styled-components';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
// eslint-disable-next-line no-unused-vars
import { IChangeState } from 'interfaces/frameworks/web/components/organisms/SignIn/IChange';

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

export default class ChangePassword extends React.PureComponent<{}, IChangeState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      password: '',
      rePassword: '',
    };
  }

  goComplete = () => {
    // eslint-disable-next-line no-undef
    window.location.href = '/signin/change-complete';
  }

  render() {
    return (
      <SingleCard title="Change Password" buttonLabel={['변경하기']} buttonOnClick={[this.goComplete]}>
        <MiddleContainer>
          <TextLabelContainer>
            <Label type="H5" color={theme.color.secondary.Moon} style={{ margin: '16px 0 56px 0' }}>새 비밀번호</Label>
            <Label type="H5" color={theme.color.secondary.Moon}>비밀번호 확인</Label>
          </TextLabelContainer>
          <TextFieldContainer>
            <TextField
              defaultLabel="새 비밀번호를 입력하세요"
              onValueChange={(value) => this.setState({ password: value })}
              style={{ width: 'auto', marginBottom: '24px' }}
              type="password"
            />
            <TextField
              defaultLabel="비밀번호를 다시 한번 입력하세요"
              onValueChange={(value) => this.setState({ rePassword: value })}
              style={{ width: 'auto' }}
              type="password"
            />
          </TextFieldContainer>
        </MiddleContainer>
      </SingleCard>
    );
  }
}

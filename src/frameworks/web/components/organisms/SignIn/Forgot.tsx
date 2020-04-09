import React from 'react';
// import styled from 'styled-components';
import theme from 'theme';
// import { Link } from 'react-router-dom';
import SingleCard from 'frameworks/web/components/molecules/SingleCard/SingleCard';
import Label from 'frameworks/web/components/atoms/Label/Label';
import TextField from 'frameworks/web/components/atoms/TextField/TextField';
import { IForgotState } from 'interfaces/frameworks/web/components/organisms/SignIn/IForgot';

export default class Forgot extends React.PureComponent<{}, IForgotState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      email: '',
    };
  }

  goComplete = () => {
    // eslint-disable-next-line no-undef
    window.location.href = '/signin/forgot-complete';
  }

  render() {
    return (
      <SingleCard title="Forgot Password?" buttonLabel={['전송하기']} buttonOnClick={[this.goComplete]}>
        <Label type="H5" color={theme.color.secondary.Nickel}>가입된 이메일을 입력하세요.</Label>
        <div style={{ width: '350px', margin: '24px auto 0 auto' }}>
          <TextField
            defaultLabel=""
            onValueChange={(value) => this.setState({ email: value })}
            style={{ width: 'auto' }}
          />
        </div>
      </SingleCard>
    );
  }
}

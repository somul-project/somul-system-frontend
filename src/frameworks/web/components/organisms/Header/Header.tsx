import React from 'react';
import styled from 'styled-components';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import { Visible, Hidden } from 'react-grid-system';

const HeaderContainer = styled.div`
  height: 80px;
  margin: 0 85px;
`;

const HeaderLogo = styled.img`
  margin: 30px 76px 30px 0;
  width: 112.5px;
  height: 20px;
  float: left;
`;

const HeaderMenuContainer = styled.div`
  float: left;
  width: 450px;
  margin: 28px 0;

  display: flex;
  justify-content: space-between;
`;

const HeaderButtonContainer = styled.div`
  float: right;
  width: 260px;
  margin: 20px 0;

  display: flex;
  justify-content: space-between;
`;

const HeaderSidebarButton = styled.img`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px 0;
`;

const notYetAlert = () => {
  // eslint-disable-next-line no-undef, no-alert
  alert('추후 공개될 예정입니다.');
};

export default class Header extends React.PureComponent {
  render() {
    return (
      <HeaderContainer>
        <a href="https://somul.kr">
          <HeaderLogo src="logo.svg" alt="소프트웨어에 물들다 (로고)" />
        </a>
        <Visible xl>
          <HeaderMenuContainer>
            <Label type="H5" onClick={notYetAlert}>소물이란?</Label>
            <Label type="H5" onClick={notYetAlert}>강연정보</Label>
            <Label type="H5" onClick={notYetAlert}>참가신청</Label>
            <Label type="H5" onClick={notYetAlert}>후원안내</Label>
            <Label type="H5" onClick={notYetAlert}>FAQ</Label>
          </HeaderMenuContainer>
          <HeaderButtonContainer>
            <Button type="small" label="회원가입" isPrimary={false} onClick={notYetAlert} style={{ marginLeft: '20px' }} />
            <Button type="small" label="로그인" isPrimary onClick={notYetAlert} />
          </HeaderButtonContainer>
        </Visible>
        <Hidden xl>
          <HeaderSidebarButton src="mobile-menu.svg" alt="사이드 메뉴" onClick={notYetAlert} />
        </Hidden>
      </HeaderContainer>
    );
  }
}

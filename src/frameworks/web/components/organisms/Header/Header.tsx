import React from 'react';
import styled from 'styled-components';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { Link } from 'react-router-dom';

const HeaderMenuContainer = styled.div`
  float: left;
  width: 100%;
  max-width: 440px;
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
  cursor: pointer;
`;

const notYetAlert = () => {
  // eslint-disable-next-line no-undef, no-alert
  alert('추후 공개될 예정입니다.');
};

export default class Header extends React.PureComponent {
  render() {
    return (
      <div>
        <ScreenClassRender render={(sClass: string) => (
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{
              height: sClass === 'xs' ? '48px' : '80px',
              margin: sClass === 'xs' ? '0 24px' : '0 85px',
            }}
            >
              <a href="https://www.somul.kr">
                <img
                  src="logo/logo.svg"
                  alt="소프트웨어에 물들다 (로고)"
                  style={{
                    margin: sClass === 'xs' ? '16px 0' : '30px 76px 30px 0',
                    width: sClass === 'xs' ? '90px' : '112.5px',
                    height: sClass === 'xs' ? '16px' : '20px',
                    float: 'left',
                  }}
                />
              </a>
              <Visible xl>
                <HeaderMenuContainer>
                  <a href="#landingAbout" style={{ textDecoration: 'none' }}>
                    <Label type="H5">소물이란?</Label>
                  </a>
                  <Label type="H5" onClick={notYetAlert}>강연정보</Label>
                  <Link to="/apply/speaker" style={{ textDecoration: 'none' }}>
                    <Label type="H5">참가신청</Label>
                  </Link>
                  <a href="#landingSponsor" style={{ textDecoration: 'none' }}>
                    <Label type="H5">후원안내</Label>
                  </a>
                  <Label type="H5" onClick={notYetAlert}>FAQ</Label>
                </HeaderMenuContainer>
                <HeaderButtonContainer>
                  <Link to="/signup/start">
                    <Button type="small" label="회원가입" isPrimary={false} onClick={() => undefined} style={{ marginLeft: '20px' }} />
                  </Link>
                  <Link to="/signin">
                    <Button type="small" label="로그인" isPrimary onClick={() => undefined} />
                  </Link>
                </HeaderButtonContainer>
              </Visible>
              <Hidden xl>
                <HeaderSidebarButton
                  src="icon/mobile-menu.svg"
                  alt="사이드 메뉴"
                  onClick={notYetAlert}
                  style={{
                    width: sClass === 'xs' ? '20px' : '40px',
                    height: sClass === 'xs' ? '20px' : '40px',
                    margin: sClass === 'xs' ? '14px 0' : '20px 0',
                  }}
                />
              </Hidden>
            </div>
          </div>
        )}
        />
      </div>
    );
  }
}

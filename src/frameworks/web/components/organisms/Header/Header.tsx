import React, { useState } from 'react';
import styled from 'styled-components';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { Link } from 'react-router-dom';

import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
import NavigationBar from 'frameworks/web/components/molecules/NavigationBar/NavigationBar';
import { IHeaderItem } from 'interfaces/frameworks/web/components/organisms/Header/IHeader';

const HeaderContainer = styled.div`
  position: fixed;
  min-width: auto;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  background-color: white;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.15);
`;

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
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const HeaderSidebarButton = styled.img`
  float: right;
  cursor: pointer;

  width: ${(props: IHeaderItem) => (props.size === 'xs' ? '20px' : '40px')};
  height: ${(props: IHeaderItem) => (props.size === 'xs' ? '20px' : '40px')};
  margin: ${(props: IHeaderItem) => (props.size === 'xs' ? '14px 0' : '20px 0')}px;
`;

export default function Header(): React.ReactElement {
  //  TODO: GraphQL 연동 필요
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  const handleTest = () => {
    setUser((prevState) => {
      if (prevState) return null;
      return { email: 'shin@gmail.com', name: '신수철' };
    });
  };

  const handleClickInfo = () => {
    //    TODO
  };

  const handleClickFAQ = () => {
    //    TODO
  };

  const handleClickSideMenu = () => {
    //    TODO
  };

  return (
    <HeaderContainer>
      <ScreenClassRender
        render={(sClass: string) => (
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
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
                    <Label onClick={handleTest} type="H5">
                      소물이란?
                    </Label>
                  </a>
                  <Label type="H5" onClick={handleClickInfo}>
                    강연정보
                  </Label>
                  <Link to="/apply/speaker" style={{ textDecoration: 'none' }}>
                    <Label type="H5">참가신청</Label>
                  </Link>
                  <a href="#landingSponsor" style={{ textDecoration: 'none' }}>
                    <Label type="H5">후원안내</Label>
                  </a>
                  <Label type="H5" onClick={handleClickFAQ}>
                    FAQ
                  </Label>
                </HeaderMenuContainer>
                <HeaderButtonContainer>
                  {user ? (
                    <NavigationBar name={user.name} email={user.email} />
                  ) : (
                    <>
                      <Link to="/signup/start">
                        <Button
                          type="small"
                          label="회원가입"
                          isPrimary={false}
                          onClick={() => undefined}
                          style={{ marginLeft: '20px' }}
                        />
                      </Link>
                      <Link to="/signin">
                        <Button type="small" label="로그인" isPrimary onClick={() => undefined} />
                      </Link>
                    </>
                  )}
                </HeaderButtonContainer>
              </Visible>
              <Hidden xl>
                <HeaderSidebarButton
                  src="icon/mobile-menu.svg"
                  alt="사이드 메뉴"
                  onClick={handleClickSideMenu}
                  size={sClass}
                />
              </Hidden>
            </div>
          </div>
        )}
      />
    </HeaderContainer>
  );
}

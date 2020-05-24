import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

import Label from 'frameworks/web/components/atoms/Label/Label';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import Button from 'frameworks/web/components/atoms/Button/Button';
import NavigationBar from 'frameworks/web/components/molecules/NavigationBar/NavigationBar';
import { IHeaderItem } from 'interfaces/frameworks/web/components/organisms/Header/IHeader';

import * as ROUTES from 'utils/routes';

import SomulLogo from 'assets/logo/logo.svg';
import HamburgerMenu from 'assets/icon/mobile-menu.svg';
import useCurrentSession from 'frameworks/web/hooks/CurrentSessionHook';

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
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const HeaderSidebarButton = styled.img`
  float: right;
  cursor: pointer;

  width: ${(props: IHeaderItem) => (props.size === 'xs' ? '20px' : '40px')};
  height: ${(props: IHeaderItem) => (props.size === 'xs' ? '20px' : '40px')};
  margin: ${(props: IHeaderItem) => (props.size === 'xs' ? '14px' : '20px')} 0px;
`;

export const PAGES = {
  NEVER_LOGIN: [
    ROUTES.SIGN_IN,
    ROUTES.SIGN_IN_FORGOT_PASSWORD,
    ROUTES.SIGN_IN_FORGOT_COMPLETE,
    ROUTES.SIGN_IN_CHANGE_PASSWORD,
    ROUTES.SIGN_IN_CHANGE_PASSWORD_COMPLETE,
    ROUTES.SIGN_UP,
    ROUTES.SIGN_UP_START,
    ROUTES.SIGN_UP_COMPLETE,
    ROUTES.SIGN_UP_OAUTH,
  ],
  REQUIRED_LOGIN: [
    ROUTES.APPLY_SPEAKER,
    ROUTES.APPLY_SPEAKER_COMPLETE,
    ROUTES.PROFILE,
    ROUTES.PROFILE_WITHDRAW,
    ROUTES.STATUS,
  ],
  ALWAYS: [ROUTES.HOME],
};

export default function Header(): React.ReactElement {
  const [isLoaded, currentSession] = useCurrentSession();
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isLoaded) {
      if (PAGES.ALWAYS.includes(pathname)) {
        //  TODO:
      } else if (PAGES.NEVER_LOGIN.includes(pathname)) {
        if (currentSession?.email) {
          history.push(ROUTES.HOME);
        }
      } else if (PAGES.REQUIRED_LOGIN.includes(pathname)) {
        if (!currentSession?.email) {
          history.push(ROUTES.SIGN_IN);
        }
      } else {
        // TODO: 404
        history.push(ROUTES.HOME);
      }
    }
  }, [isLoaded, pathname, currentSession, history]);

  const handleClickInfo = () => {
    //    TODO
  };

  const handleClickSideMenu = () => {
    //    TODO
  };

  // @ts-ignore
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
              <a href="/">
                <img
                  src={SomulLogo}
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
                  <a href="/?goto=landingAbout" style={{ textDecoration: 'none' }}>
                    <Label type="H5">소물이란?</Label>
                  </a>
                  <Label type="H5" onClick={handleClickInfo}>
                    강연정보
                  </Label>
                  <NavLink to={ROUTES.APPLY_SPEAKER} style={{ textDecoration: 'none' }}>
                    <Label type="H5">참가신청</Label>
                  </NavLink>
                  <a href="/?goto=landingSponsor" style={{ textDecoration: 'none' }}>
                    <Label type="H5">후원안내</Label>
                  </a>
                </HeaderMenuContainer>
                {!isLoaded ? (
                  <HeaderButtonContainer style={{ margin: '25px 0' }}>
                    <Loading useBarrier={false} />
                  </HeaderButtonContainer>
                ) : (
                  <HeaderButtonContainer>
                    {currentSession?.name && currentSession?.name ? (
                      <NavigationBar
                        name={currentSession?.name}
                        email={currentSession?.email}
                        style={{ marginTop: '-3px' }}
                      />
                    ) : (
                      <>
                        <NavLink to={ROUTES.SIGN_UP} replace>
                          <Button
                            type="small"
                            label="회원가입"
                            isPrimary={false}
                            onClick={() => undefined}
                            style={{ marginRight: '20px' }}
                          />
                        </NavLink>
                        <NavLink to={ROUTES.SIGN_IN} replace>
                          <Button type="small" label="로그인" isPrimary onClick={() => undefined} />
                        </NavLink>
                      </>
                    )}
                  </HeaderButtonContainer>
                )}
              </Visible>
              <Hidden xl>
                <HeaderSidebarButton
                  src={HamburgerMenu}
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

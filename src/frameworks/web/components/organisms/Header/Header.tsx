import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Visible, Hidden, ScreenClassRender } from 'react-grid-system';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';

import Label from 'frameworks/web/components/atoms/Label/Label';
import Loading from 'frameworks/web/components/atoms/Loading/Loading';
import Button from 'frameworks/web/components/atoms/Button/Button';
import NavigationBar from 'frameworks/web/components/molecules/NavigationBar/NavigationBar';
import { IHeaderItem } from 'interfaces/frameworks/web/components/organisms/Header/IHeader';

import * as ROUTES from 'utils/routes';

import SomulLogo from 'assets/logo/logo.svg';
import HamburgerMenu from 'assets/icon/mobile-menu.svg';
import { GET_USER } from 'service/graphql/query/User';
import { IUserData } from 'interfaces/service/graphql/query/IUser';
import apolloClient from 'frameworks/web/apollo';
import { isEmail } from 'utils/validator';
import { CURRENT_EMAIL_VALUE } from 'utils/constants';

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
  margin: ${(props: IHeaderItem) => (props.size === 'xs' ? '14px' : '20px')} 0px;
`;

export default function Header(): React.ReactElement {
  const [email, setEmail] = useState('');

  const getCurrentSessionEmail = (): string | undefined => {
    const emailFromQueryString = new URLSearchParams(window.location.search).get('email');
    const codeFromQueryString = new URLSearchParams(window.location.search).get('statusCode');

    let cached = false;
    let loadedEmail: string;
    const savedEmail = window.localStorage.getItem(CURRENT_EMAIL_VALUE);

    if (savedEmail) {
      cached = true;
      loadedEmail = savedEmail;
    } else {
      loadedEmail = emailFromQueryString!;
    }

    if (loadedEmail && loadedEmail.length > 0 && isEmail(loadedEmail)) {
      if (cached) {
        return loadedEmail;
      }

      if (!cached && codeFromQueryString === '0') {
        return loadedEmail;
      }
    }

    return undefined;
  };

  useEffect(() => {
    const currentEmail = getCurrentSessionEmail();

    if (currentEmail) {
      setEmail(currentEmail);
      window.localStorage.setItem(CURRENT_EMAIL_VALUE, currentEmail);
      window.history.replaceState(null, document.title, window.location.href.split('?')[0]);
    }
  }, []);

  const handleClickInfo = () => {
    //    TODO
  };

  const handleClickFAQ = () => {
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
                  <Link to={ROUTES.APPLY_SPEAKER} style={{ textDecoration: 'none' }}>
                    <Label type="H5">참가신청</Label>
                  </Link>
                  <a href="/?goto=landingSponsor" style={{ textDecoration: 'none' }}>
                    <Label type="H5">후원안내</Label>
                  </a>
                  <Label type="H5" onClick={handleClickFAQ}>
                    FAQ
                  </Label>
                </HeaderMenuContainer>
                <HeaderButtonContainer>
                  <Query<IUserData> query={GET_USER} client={apolloClient} variables={{ email }}>
                    {({ loading, error, data }) => {
                      if (loading) return <Loading />;
                      if (!error && data!.user.name && data!.user.email) {
                        return <NavigationBar name={data!.user.name} email={data!.user.email} />;
                      }
                      return (
                        <div>
                          <Link to={ROUTES.SIGN_UP_START}>
                            <Button
                              type="small"
                              label="회원가입"
                              isPrimary={false}
                              onClick={() => undefined}
                              style={{ marginLeft: '20px' }}
                            />
                          </Link>
                          <Link to={ROUTES.SIGN_IN} style={{ marginLeft: '20px' }}>
                            <Button
                              type="small"
                              label="로그인"
                              isPrimary
                              onClick={() => undefined}
                            />
                          </Link>
                        </div>
                      );
                    }}
                  </Query>
                </HeaderButtonContainer>
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

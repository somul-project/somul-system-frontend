import styled from 'styled-components';
import theme from 'theme';
import React, { useRef, useEffect, useState } from 'react';

import Label from 'frameworks/web/components/atoms/Label/Label';
// eslint-disable-next-line no-unused-vars
import {
  INavBar,
  INavBarState,
} from 'interfaces/frameworks/web/components/molecules/NavigationBar/INavigationBar';

import PersonIcon from 'assets/icon/person.svg';
import ArrowDownIcon from 'assets/icon/arrow-down.svg';
import DropdownBoxShadow from 'assets/etc/dropdown-box.svg';
import useCurrentSession from 'frameworks/web/hooks/CurrentSessionHook';
import CurrentSessionRequest from 'service/request/CurrentSessionRequest';
import { Link } from 'react-router-dom';
import * as ROUTES from 'utils/routes';

const NavContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuButtonContainer = styled.div`
  cursor: pointer;
  width: 140px;
  height: 48px;
  border-radius: 8px;
  margin-left: 115px;
  padding: 12px 8px 12px 16px;
  background-color: ${(props: INavBarState) =>
    props.isEnable ? theme.color.secondary.Snow : 'none'};
  display: flex;
  justify-content: space-between;

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.color.secondary.Snow};
    }
  }
`;

const MenuDropdownContainer = styled.div`
  cursor: pointer;
  display: ${(props: INavBarState) => (props.isEnable ? 'block' : 'none')};
  position: absolute;
  background-image: url(${DropdownBoxShadow});
  background-size: 255px 250px;
  width: 255px;
  height: 250px;
  margin-top: 6px;
  z-index: 1;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 102px;
  padding: 25px 0 18px 24px;
  border-bottom: 1px solid ${theme.color.secondary.Ash};
`;

const MenuContainer = styled.div`
  padding: 8px;

  a {
    text-decoration: none;
  }
`;

const MenuElementContainer = styled.div`
  width: 100%;
  height: 44px;
  padding: 10px 0 10px 16px;
  border-radius: 8px;

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.color.secondary.Snow};
    }
  }
`;

export default function NavigationBar(props: INavBar) {
  const { email, name, style = {} } = props;
  const [isEnable, setEnable] = useState(false);
  const [, , revokeSession] = useCurrentSession();

  const setWrapperRef = useRef();

  const handleClickOutside = (event: Event) => {
    // @ts-ignore
    if (setWrapperRef.current && !setWrapperRef.current.contains(event.target! as Node)) {
      setEnable(false);
    }
  };

  const onMenuButtonClick = () => {
    setEnable(!isEnable);
  };

  const notYetAlert = () => {
    // eslint-disable-next-line no-undef, no-alert
    alert('준비중입니다.');
  };

  const logout = () => {
    CurrentSessionRequest.logout().then(() => {
      revokeSession();
      window.location.replace('/');
    });
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    // @ts-ignore
    <NavContainer style={style} ref={setWrapperRef}>
      <MenuButtonContainer isEnable={isEnable} onClick={onMenuButtonClick}>
        <img src={PersonIcon} alt="회원 아이콘" style={{ width: '24px', height: '24px' }} />
        <Label type="H5" style={{ width: '52px', textAlign: 'left' }}>
          {name}
        </Label>
        <img src={ArrowDownIcon} alt="화살표 아이콘" style={{ width: '24px', height: '24px' }} />
      </MenuButtonContainer>
      <MenuDropdownContainer isEnable={isEnable}>
        <InfoContainer>
          <div style={{ margin: '8px 0', display: 'flex', alignItems: 'flex-end' }}>
            <Label type="H5">{name}</Label>
            <Label type="P2">님</Label>
          </div>
          <Label type="P1" color={theme.color.secondary.Moon}>
            {email}
          </Label>
        </InfoContainer>
        <MenuContainer>
          <Link to={ROUTES.STATUS}>
            <MenuElementContainer onClick={() => setEnable(false)}>
              <Label type="H5">신청 현황</Label>
            </MenuElementContainer>
          </Link>
          <Link to={ROUTES.PROFILE}>
            <MenuElementContainer onClick={() => setEnable(false)}>
              <Label type="H5">프로필</Label>
            </MenuElementContainer>
          </Link>
          <MenuElementContainer onClick={logout}>
            <Label type="P1" color={theme.color.secondary.Moon}>
              로그아웃
            </Label>
          </MenuElementContainer>
        </MenuContainer>
      </MenuDropdownContainer>
    </NavContainer>
  );
}

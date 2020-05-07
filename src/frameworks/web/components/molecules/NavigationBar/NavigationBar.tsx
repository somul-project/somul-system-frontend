import styled from 'styled-components';
import theme from 'theme';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { INavBar, INavBarState } from 'interfaces/frameworks/web/components/molecules/NavigationBar/INavigationBar';
import { SERVER_URL } from 'utils/constants';
import Label from 'frameworks/web/components/atoms/Label/Label';

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
  background-color: ${(props: INavBarState) => (props.isEnable ? theme.color.secondary.Snow : 'none')};
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
  background-image: url("etc/dropdown-box.svg");
  background-size: 255px 250px;
  width: 255px;
  height: 250px;
  margin-top: 24px;
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

export default class NavigationBar extends React.PureComponent<INavBar, INavBarState> {
  wrapperRef: HTMLDivElement | undefined = undefined;

  constructor(props: INavBar) {
    super(props);
    this.state = {
      isEnable: false,
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount(): void {
    // eslint-disable-next-line no-undef
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount(): void {
    // eslint-disable-next-line no-undef
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  onMenuButtonClick() {
    const { isEnable } = this.state;
    this.setState({
      isEnable: !isEnable,
    });
  }

  setWrapperRef(node: HTMLDivElement) {
    this.wrapperRef = node;
  }

  notYetAlert = () => {
    // eslint-disable-next-line no-undef, no-alert
    alert('준비중입니다.');
  };

  handleClickOutside(event: Event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target! as Node)) {
      this.setState({
        isEnable: false,
      });
    }
  }

  render() {
    const { isEnable } = this.state;
    const { name, email } = this.props;
    return (
      <NavContainer>
        <MenuButtonContainer isEnable={isEnable} onClick={() => this.onMenuButtonClick()}>
          <img src="icon/person.svg" alt="회원 아이콘" style={{ width: '24px', height: '24px' }} />
          <Label type="H5" style={{ width: '52px', textAlign: 'left' }}>{name}</Label>
          <img src="icon/arrow-down.svg" alt="화살표 아이콘" style={{ width: '24px', height: '24px' }} />
        </MenuButtonContainer>
        <MenuDropdownContainer isEnable={isEnable}>
          <InfoContainer>
            <div style={{ margin: '8px 0', display: 'flex', alignItems: 'flex-end' }}>
              <Label type="H5">{name}</Label>
              <Label type="P2">님</Label>
            </div>
            <Label type="P1" color={theme.color.secondary.Moon}>{email}</Label>
          </InfoContainer>
          <MenuContainer>
            <MenuElementContainer onClick={this.notYetAlert}>
              <Label type="H5">신청 현황</Label>
            </MenuElementContainer>
            <MenuElementContainer onClick={this.notYetAlert}>
              <Label type="H5">개인정보 수정</Label>
            </MenuElementContainer>
            <a href={`${SERVER_URL}/auth/logout`} style={{ textDecoration: 'none' }}>
              <MenuElementContainer>
                <Label type="P1" color={theme.color.secondary.Moon}>로그아웃</Label>
              </MenuElementContainer>
            </a>
          </MenuContainer>
        </MenuDropdownContainer>
      </NavContainer>
    );
  }
}

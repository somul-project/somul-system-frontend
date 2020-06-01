/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styled from 'styled-components';
import React from 'react';

import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Button from 'frameworks/web/components/atoms/Button/Button';
import SomulLogo from 'assets/logo/logo.svg';
import {
  IYoutubeModal,
  IYoutubeModalBackground,
} from 'interfaces/frameworks/web/components/molecules/YoutubeModal/IYoutubeModal';

const ModalBackground = styled.div`
  display: ${(props: IYoutubeModalBackground) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 5;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled(ContentsBox)`
  width: 730px;
  padding: 64px 45px;
  background-color: white;
  margin: 0 auto;
  text-align: center;
`;

export default function LectureModal({
  isOpen = false,
  onClose,
  youtubeLink,
}: IYoutubeModal): React.ReactElement {
  // "https://www.youtube.com/embed/6sKjutgEMzk"
  return (
    <ModalBackground isOpen={isOpen}>
      <CardContainer isDarkBackground>
        <img
          src={SomulLogo}
          alt="소물 로고"
          style={{ width: '112.5px', height: '20px', marginBottom: '24px' }}
        />
        <iframe
          title="유튜브 라이브"
          width="640"
          height="360"
          src={youtubeLink}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Button
          type="field"
          label="닫기"
          onClick={() => onClose()}
          isPrimary
          style={{ marginTop: '40px' }}
        />
      </CardContainer>
    </ModalBackground>
  );
}

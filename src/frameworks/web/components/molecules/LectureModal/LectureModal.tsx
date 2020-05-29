/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styled from 'styled-components';
import React, { ReactNode } from 'react';

import theme from 'theme';
import PlayIcon from 'assets/icon/play.svg';
import ContentsBox from 'frameworks/web/components/atoms/ContentsBox/ContentsBox';
import Label from 'frameworks/web/components/atoms/Label/Label';
import Button from 'frameworks/web/components/atoms/Button/Button';
// eslint-disable-next-line no-unused-vars
import {
  ILectureModal,
  ILectureModalBackground,
} from 'interfaces/frameworks/web/components/molecules/LectureModal/ILectureModal';

const ModalBackground = styled.div`
  display: ${(props: ILectureModalBackground) => (props.isOpen ? 'flex' : 'none')};
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
  padding: 64px 95px;
  background-color: white;
  margin: 0 auto;
  text-align: center;
`;

const YoutubeButtonContainer = styled.div`
  width: 100%;
  margin: 24px 0;
  display: flex;
`;

const PlayButtonContainer = styled.div`
  cursor: pointer;
  width: 100%;
  height: 80px;
  border-radius: 15px;
  background-color: ${theme.color.primary.Azure};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (hover: hover) {
    &:hover {
      background-color: ${theme.color.primary.Sky};
    }
  }
`;

const PlayImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 16px;
`;

const SpeakerContainer = styled.div`
  width: 100%;
  padding: 16px 24px;
  background-color: ${theme.color.secondary.Snow};
  border-radius: 20px;
`;

const SpeakerNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const PlayButton = ({ href, label }: any) => {
  const onButtonClick = () => {
    const win = window.open(href, '_blank');
    win!.focus();
  };
  return (
    <PlayButtonContainer onClick={() => onButtonClick()}>
      <Label type="H4" color={theme.color.primary.White}>
        {label}
      </Label>
      <PlayImg src={PlayIcon} alt="재생버튼" />
    </PlayButtonContainer>
  );
};

export default function LectureModal({
  isOpen = false,
  onClose,
  title,
  youtubeLink,
  speaker,
  speakerInfo,
  lectureInfo,
}: ILectureModal): React.ReactElement {
  const youtubeButtons: ReactNode[] = [];
  youtubeLink.forEach((link, idx) => {
    youtubeButtons.push(
      <div
        style={{
          width: `${(540 - 30 * (youtubeLink.length - 1)) / youtubeLink.length}px`,
          marginRight: youtubeLink.length - 1 === idx ? '0' : '30px',
        }}
      >
        <PlayButton
          href={link}
          label={youtubeLink.length === 1 ? '강연 바로가기' : `${idx + 1}회`}
        />
      </div>,
    );
  });
  return (
    <ModalBackground isOpen={isOpen}>
      <CardContainer isDarkBackground>
        <Label type="H4" color={theme.color.primary.Azure}>
          {title}
        </Label>
        <YoutubeButtonContainer>{youtubeButtons}</YoutubeButtonContainer>
        <SpeakerContainer>
          <SpeakerNameContainer>
            <Label type="H6" color={theme.color.secondary.Moon} style={{ marginRight: '16px' }}>
              강연자
            </Label>
            <Label type="P1" color={theme.color.secondary.Moon}>
              {speaker}
            </Label>
          </SpeakerNameContainer>
          <Label type="P2" color={theme.color.secondary.Moon} style={{ textAlign: 'left' }}>
            {speakerInfo}
          </Label>
        </SpeakerContainer>
        <Label type="H6" color={theme.color.secondary.Moon} style={{ margin: '16px 0' }}>
          강연 내용
        </Label>
        <Label type="P2" style={{ textAlign: 'left' }}>
          {lectureInfo}
        </Label>
        <Button
          type="field"
          label="닫기"
          onClick={() => onClose()}
          style={{ float: 'right', marginTop: '40px' }}
        />
      </CardContainer>
    </ModalBackground>
  );
}

import React from 'react';
import styled from 'styled-components';
import { IVideoButton } from 'interfaces/frameworks/web/components/atoms/VideoButton/IVideoButton';
import PlayIcon from 'assets/icon/play.svg';

const VideoButtonContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 15px;
  background-color: #ff7767;
  padding: 16px;
  cursor: pointer;
`;

const PlayImg = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;

export default function VideoButton({ href }: IVideoButton): React.ReactElement {
  const onButtonClick = () => {
    const win = window.open(href, '_blank');
    win!.focus();
  };

  return (
    <VideoButtonContainer onClick={onButtonClick}>
      <PlayImg src={PlayIcon} alt="재생 버튼" />
    </VideoButtonContainer>
  );
}

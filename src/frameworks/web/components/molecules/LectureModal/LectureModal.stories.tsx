import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import Button from 'frameworks/web/components/atoms/Button/Button';
import LectureModal from 'frameworks/web/components/molecules/LectureModal/LectureModal';

export default {
  title: 'LectureModal',
  decorators: [withKnobs],
};

const store = new Store({
  isModalOpen: false,
});

const handleButtonClick = () => {
  store.set({ isModalOpen: !store.get('isModalOpen') });
};

const handleModalClose = () => {
  store.set({ isModalOpen: false });
};

const SAMPLE_LONG_TEXT = `
따뜻한 평화스러운 얼음 심장의 청춘을 사막이다.
않는 품고 반짝이는 때문이다. 위하여, 싸인 생의 가진 그들의 사막이다.
얼음이 열락의 목숨이 들어 굳세게 위하여, 내려온 봄날의 대한 이것이다.
아름답고 고행을 인간의 오직 이상을 싹이 청춘은 청춘 있다.
그와 피부가 예가 소담스러운 뜨거운지라, 사막이다. 주며, 싶이 이 모래뿐일 사막이다.
행복스럽고 무엇을 인간에 같이, 예수는 목숨이 있는가?
그러므로 그것은 심장의 어디 무엇을 아니다.`;

export const SimpleLectureModal = () => {
  const title = text(
    '발표제목',
    '클라우드와 AI로 바뀌는 세상 클라우드와 AI로 바뀌는 세상 클라우드와 AI로 바뀜',
  );
  const speaker = text('강연자', '박성우');
  const speakerInfo = text('강연자 정보', SAMPLE_LONG_TEXT);
  const lectureInfo = text('강연 정보', SAMPLE_LONG_TEXT);

  return (
    <State store={store}>
      {(state) => [
        <div>
          <Button type="default" label="LectureModal 열기" onClick={handleButtonClick} isPrimary />
          <LectureModal
            isOpen={state.isModalOpen}
            onClose={handleModalClose}
            youtubeLink={['https://youtube.com', 'https://youtube.com', 'https://youtube.com']}
            speaker={speaker}
            title={title}
            speakerInfo={speakerInfo}
            lectureInfo={lectureInfo}
          />
        </div>,
      ]}
    </State>
  );
};

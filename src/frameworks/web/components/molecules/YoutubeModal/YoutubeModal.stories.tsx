import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import Button from 'frameworks/web/components/atoms/Button/Button';
import YoutubeModal from 'frameworks/web/components/molecules/YoutubeModal/YoutubeModal';

export default {
  title: 'YoutubeModal',
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

export const SimpleYoutubeModal = () => {
  const youtubeLink = text('유튜브 링', 'https://www.youtube.com/embed/6sKjutgEMzk');

  return (
    <State store={store}>
      {(state) => [
        <div>
          <Button type="default" label="LectureModal 열기" onClick={handleButtonClick} isPrimary />
          <YoutubeModal
            isOpen={state.isModalOpen}
            onClose={handleModalClose}
            youtubeLink={youtubeLink}
          />
        </div>,
      ]}
    </State>
  );
};

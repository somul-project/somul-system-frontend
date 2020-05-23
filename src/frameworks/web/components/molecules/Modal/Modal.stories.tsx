import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import theme from 'theme';
import Button from 'frameworks/web/components/atoms/Button/Button';
import Modal from 'frameworks/web/components/molecules/Modal/Modal';
import Label from 'frameworks/web/components/atoms/Label/Label';
import SomulLogo from 'assets/logo/logo.svg';

export default {
  title: 'Modal',
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

export const EmptyModal = () => {
  const sampleText = text('Modal Content', '예시');

  return (
    <State store={store}>
      {(state) => [
        <div>
          <Button type="default" label="Modal 열기" onClick={handleButtonClick} isPrimary />
          <Modal type="empty" isOpen={state.isModalOpen} onClose={handleModalClose}>
            <Label style={{ paddingBottom: '48px' }}>{sampleText}</Label>
          </Modal>
        </div>,
      ]}
    </State>
  );
};

export const EmptyModalExample = () => {
  const sampleText = text('Modal Content', '소프트웨어에 물들다에 가입하신 걸 환영합니다.');

  return (
    <State store={store}>
      {(state) => [
        <div>
          <Button type="default" label="Modal 열기" onClick={handleButtonClick} isPrimary />
          <Modal type="empty" isOpen={state.isModalOpen} onClose={handleModalClose}>
            <img src={SomulLogo} alt="소물 로고" style={{ width: '112.5px', height: '20px' }} />
            <Label type="H4" color={theme.color.primary.Azure} style={{ padding: '48px 0 16px 0' }}>
              메일 인증이 완료되었습니다!
            </Label>
            <Label type="P1" style={{ paddingBottom: '48px' }}>
              {sampleText}
            </Label>
          </Modal>
        </div>,
      ]}
    </State>
  );
};

export const TopXButtonModal = () => {
  const title = text('Modal Title', 'Modal Heading');
  const sampleText = text('Modal Content', SAMPLE_LONG_TEXT);

  return (
    <State store={store}>
      {(state) => [
        <div>
          <Button type="default" label="Modal 열기" onClick={handleButtonClick} isPrimary />
          <Modal
            type="top-x-button"
            title={title}
            isOpen={state.isModalOpen}
            onClose={handleModalClose}
          >
            <Label>{sampleText}</Label>
          </Modal>
        </div>,
      ]}
    </State>
  );
};

export const BottomButtonModal = () => {
  const title = text('Modal Title', 'Modal Heading');
  const sampleText = text('Modal Content', SAMPLE_LONG_TEXT);
  const extraButtonText = text('Extra Button Text', '오늘 하루 보지 않기');

  return (
    <State store={store}>
      {(state) => [
        <div>
          <Button type="default" label="Modal 열기" onClick={handleButtonClick} isPrimary />
          <Modal
            type="bottom-button"
            title={title}
            isOpen={state.isModalOpen}
            onClose={handleModalClose}
            buttonLabel={extraButtonText}
            buttonOnClick={handleModalClose}
          >
            <Label>{sampleText}</Label>
          </Modal>
        </div>,
      ]}
    </State>
  );
};

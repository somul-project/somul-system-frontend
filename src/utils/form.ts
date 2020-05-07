export class FormService {
  public static checkTextLength = (form: HTMLTextAreaElement | HTMLInputElement, len: number) => {
    if (form.value.length > len) {
      // eslint-disable-next-line no-alert, no-undef
      alert(`제한 글자수 ${len}자를 초과했습니다.`);
      const cutStr = form.value.substr(0, len);
      form.value = cutStr;
      return false;
    }
    return true;
  }
}

export default FormService;

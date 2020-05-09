export const checkTextLength = (
  form: HTMLTextAreaElement | HTMLInputElement,
  len: number,
): Boolean => {
  if (form.value.length > len) {
    // eslint-disable-next-line no-alert, no-undef
    alert(`제한 글자수 ${len}자를 초과했습니다.`);
    const cutStr = form.value.substr(0, len);
    // eslint-disable-next-line no-param-reassign
    form.value = cutStr;
    return false;
  }
  return true;
};

export const isEmail = (email: String): Boolean => {
  const re = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  return re.test(String(email).toLowerCase());
};

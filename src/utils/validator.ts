export const isName = (name: string): boolean => {
  return name.trim().length > 1;
};

export const isEmail = (email: string): boolean => {
  if (email.trim().length <= 0) {
    return false;
  }

  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  return emailRegex.test(String(email.trim()).toLowerCase());
};

export const isPhoneNumber = (pNumber: string): boolean => {
  if (pNumber.trim().length <= 0) {
    return false;
  }

  const phoneNumberRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;

  return phoneNumberRegex.test(pNumber.trim());
};

export const isValidYoutubeLink = (link: string): boolean => {
  const youtubeLinkRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;
  return youtubeLinkRegex.test(String(link.trim()));
};

export const isValidPassword = (password: string): boolean => {
  if (password.trim().length < 8) {
    return false;
  }

  const passwordRegex = /(?=.*[0-9])/;
  return passwordRegex.test(password.trim());
};

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

export const isURL = (url: string): boolean => {
  if (url.trim().length <= 0) return false;

  const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
  return urlRegExp.test(url);
};

export const isYouTubeURL = (url: string): boolean => {
  if (!isURL(url)) return false;

  try {
    const HASH_LENGTH = 11;
    const HOST_NAMES = { SHORT: 'youtu.be', LONG: 'youtube.com' };

    const { protocol, hostname, pathname, searchParams } = new URL(url);

    if (protocol !== 'https') return false;
    if (hostname.includes(HOST_NAMES.LONG)) {
      const v = searchParams.get('v') || '';
      return pathname === '/watch' && v.length === 11;
    }
    if (hostname.includes(HOST_NAMES.SHORT)) {
      return pathname.length === HASH_LENGTH;
    }

    return false;
  } catch {
    return false;
  }
};

export const isValidPassword = (password: string): boolean => {
  if (password.trim().length < 8) {
    return false;
  }

  const passwordRegex = /(?=.*[0-9])/;
  return passwordRegex.test(password.trim());
};

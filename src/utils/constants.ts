export const NODE_ENV = process.env.NODE_ENV !== 'production' ? 'development' : 'production';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const ERROR_MESSAGE: {[code: string]: string} = {
  0: '성공',
  1: '적절하지 않은 인자입니다.',
  100: '로그인에 실패했습니다.',
  101: '토큰 인증에 실패했습니다.',
  102: '이미 등록된 사용자입니다.',
  103: '비밀번호 초기화에 실패했습니다.',
  104: '권한이 충분하지 않습니다.',
  105: '회원 가입이 필요합니다.',
  106: '세션이 이미 가득 찼습니다.',
  107: '이메일의 형식이 적절하지 않습니다.',
  108: '비밀번호의 형식이 적절하지 않습니다.',
  109: '휴대폰 번호의 형식이 적절하지 않습니다.',
  500: '예상치 못한 오류가 발생했습니다.',
};

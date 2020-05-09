import moxios from 'moxios';
import UserService from './user';

describe('user utils', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('signUpValidationCheck function', () => {
    it('gets correct signup data', () => {
      const rightData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '01012345678',
        password: 'testtest123',
        rePassword: 'testtest123',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(rightData)).toEqual(true);
      const withSignData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '01012345678',
        password: 'testtest123#$%^',
        rePassword: 'testtest123#$%^',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(withSignData)).toEqual(true);
    });
    it('gets empty signup data', () => {
      const emptyData = {
        name: '',
        email: '',
        phone: '',
        password: '',
        rePassword: '',
        isPrivacyChecked: false,
      };
      expect(UserService.signUpValidationCheck(emptyData)).toEqual('모든 칸을 입력해야 합니다.');
    });
    it('gets not allow privacy item signup data', () => {
      const privacyFalseData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '01012345678',
        password: 'test',
        rePassword: 'test',
        isPrivacyChecked: false,
      };
      expect(UserService.signUpValidationCheck(privacyFalseData)).toEqual(
        '개인정보처리방침 동의가 필요합니다.',
      );
    });
    it('gets wrong email signup data', () => {
      const notAtMarkEmailData = {
        name: '박성우',
        email: 'testsomul.kr',
        phone: '01012345678',
        password: 'test',
        rePassword: 'test',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(notAtMarkEmailData)).toEqual(
        '이메일 형식이 올바르지 않습니다.',
      );
      const notDotEmailData = {
        name: '박성우',
        email: 'test@somul',
        phone: '01012345678',
        password: 'test',
        rePassword: 'test',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(notDotEmailData)).toEqual(
        '이메일 형식이 올바르지 않습니다.',
      );
    });
    it('gets wrong phone signup data', () => {
      const dashPhoneData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '010-1234-5678',
        password: 'test',
        rePassword: 'test',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(dashPhoneData)).toEqual(
        '휴대폰 번호 형식이 올바르지 않습니다.',
      );
      const shortPhoneData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '021235678',
        password: 'test',
        rePassword: 'test',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(shortPhoneData)).toEqual(
        '휴대폰 번호 형식이 올바르지 않습니다.',
      );
    });
    it('gets wrong password signup data', () => {
      const shortPasswordData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '01012345678',
        password: 'test',
        rePassword: 'test',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(shortPasswordData)).toEqual(
        '비밀번호 형식이 올바르지 않습니다.',
      );
      const onlyEngPasswordData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '01012345678',
        password: 'testtesta',
        rePassword: 'testtest',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(onlyEngPasswordData)).toEqual(
        '비밀번호 형식이 올바르지 않습니다.',
      );
      const onlyNumPasswordData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '01012345678',
        password: '11111111',
        rePassword: '11111111',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(onlyNumPasswordData)).toEqual(
        '비밀번호 형식이 올바르지 않습니다.',
      );
    });
    it('gets password different signup data', () => {
      const differentPasswordData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '01012345678',
        password: 'testtest123',
        rePassword: 'testtest12',
        isPrivacyChecked: true,
      };
      expect(UserService.signUpValidationCheck(differentPasswordData)).toEqual(
        '비밀번호가 일치하지 않습니다.',
      );
    });
  });

  describe('sendSignUpData function', () => {
    it('send right data', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            statusCode: '0',
            errorMessage: '성공',
          },
        });
      });
      const rightData = {
        name: '박성우',
        email: 'test@somul.kr',
        phone: '01012345678',
        password: 'testtest123',
        rePassword: 'testtest123',
        isPrivacyChecked: true,
      };
      expect(await UserService.sendSignUpData(rightData)).toEqual('0');
    });
  });

  describe('signInValidationCheck function', () => {
    it('gets correct signin data', () => {
      const rightData = {
        email: 'test@somul.kr',
        password: 'testtest123',
      };
      expect(UserService.signInValidationCheck(rightData)).toEqual(true);
    });
    it('gets some empty signin data', () => {
      const emptyData = {
        email: '',
        password: '',
      };
      expect(UserService.signInValidationCheck(emptyData)).toEqual('모든 칸을 입력해야 합니다.');
      const emptyEmailData = {
        email: '',
        password: 'asdfasdf11',
      };
      expect(UserService.signInValidationCheck(emptyEmailData)).toEqual(
        '모든 칸을 입력해야 합니다.',
      );
      const emptyPasswordData = {
        email: 'test@somul.kr',
        password: '',
      };
      expect(UserService.signInValidationCheck(emptyPasswordData)).toEqual(
        '모든 칸을 입력해야 합니다.',
      );
    });
  });

  describe('sendSignInData function', () => {
    it('send right data', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            statusCode: '0',
            errorMessage: '성공',
          },
        });
      });
      const rightData = {
        email: 'test@somul.kr',
        password: 'testtest123',
      };
      expect(await UserService.sendSignInData(rightData)).toEqual('0');
    });
  });

  describe('sendSignInData function', () => {
    it('send request', async () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            statusCode: '0',
            errorMessage: '성공',
          },
        });
      });
      expect(await UserService.requestResendEmail()).toEqual('0');
    });
  });
});

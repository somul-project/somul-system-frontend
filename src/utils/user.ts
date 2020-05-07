/* eslint-disable no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import { ISignUpData, ISignInData, IServerResponse } from 'interfaces/utils/user/IUserService';
import { IForgotState } from 'interfaces/frameworks/web/components/organisms/SignIn/IForgot';
import { SERVER_URL } from './constants';
// import { getEnv } from 'utils/constants';

export class UserService {
  /**
   * 회원 가입 데이터에 잘못된 값이 들어있는지 검사합니다.
   * @param data {ISignupData} 회원가입 Payload
   * @returns true or 에러메세지
   */
  public static signUpValidationCheck = (data: ISignUpData) => {
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    const passwordRegExp = /^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*[A-Za-z!@#$%^&+=_]).{8,100}$/i;
    const phoneRegExp = /^[0-9]*$/i;

    if (data.email === '' || data.name === '' || data.password === '' || data.phone === '' || data.rePassword === '') {
      return '모든 칸을 입력해야 합니다.';
    }
    if (data.isPrivacyChecked === false) {
      return '개인정보처리방침 동의가 필요합니다.';
    }
    if (!emailRegExp.test(data.email)) {
      return '이메일 형식이 올바르지 않습니다.';
    }
    if (data.phone.length !== 11 || !phoneRegExp.test(data.phone)) {
      return '휴대폰 번호 형식이 올바르지 않습니다.';
    }
    if (!passwordRegExp.test(data.password)) {
      return '비밀번호 형식이 올바르지 않습니다.';
    }
    if (data.password !== data.rePassword) {
      return '비밀번호가 일치하지 않습니다.';
    }
    return true;
  }

  /**
   * 회원 가입 데이터를 서버에 보내 저장합니다.
   * @param data {ISignupData} 회원가입 Payload
   * @returns 서버에서 돌아오는 status code
   */
  public static sendSignUpData = async (data: ISignUpData) => {
    const result: AxiosResponse<IServerResponse> = await axios.post(`${SERVER_URL}/auth/register`, {
      email: data.email,
      name: data.name,
      phonenumber: data.phone,
      password: data.password,
    });
    return result.data.statusCode;
  }

  /**
   * 회원 로그인 데이터에 잘못된 값이 들어있는지 검사합니다.
   * @param data {ISignInData} 로그인 Payload
   * @returns true or 에러메세지
   */
  public static signInValidationCheck = (data: ISignInData) => {
    if (data.email === '' || data.password === '') {
      return '모든 칸을 입력해야 합니다.';
    }
    return true;
  }

  /**
   * 회원 로그인 데이터를 서버에 보냅니다.
   * @param data {ISignInData} 로그인 Payload
   * @returns 서버에서 돌아오는 status code
   */
  public static sendSignInData = async (data: ISignInData) => {
    const result: AxiosResponse<IServerResponse> = await axios.post(`${SERVER_URL}/auth/login`, {
      email: data.email,
      password: data.password,
    });
    return result.data.statusCode;
  }

  /**
   * 이메일 인증 메일 재전송을 요청합니다.
   * @returns 서버에서 돌아오는 status code
   */
  public static requestResendEmail = async () => {
    const result: AxiosResponse<IServerResponse> = await axios.get(`${SERVER_URL}/auth/resend`);
    return result.data.statusCode;
  }

  public static requestForgotCheck = async (data: IForgotState) => {
    const result: AxiosResponse<IServerResponse> = await axios.post(`${SERVER_URL}/auth/login`, {
      email: data.email,
    });
    return result.data.statusCode;
  }
}

export default UserService;

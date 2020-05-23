/* eslint-disable camelcase */
import { IMutation } from '../schema/IMutation';

export interface ICreateSessionData {
  createSession: IMutation;
}

export interface ICreateSessionPayload {
  user_email: string;
  session_name: string;
  session_time: string;
  introduce: string;
  document: string;
}

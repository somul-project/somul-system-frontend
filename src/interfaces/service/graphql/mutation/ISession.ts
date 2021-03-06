/* eslint-disable camelcase */
import { IMutation } from 'interfaces/service/graphql/schema/IMutation';

export interface ICreateSessionData {
  createSession: IMutation;
}

export interface ICreateSessionPayload {
  user_email: string;
  session_name: string;
  session_time: string;
  session_explainer: string;
  introduce: string;
  document: string;
}

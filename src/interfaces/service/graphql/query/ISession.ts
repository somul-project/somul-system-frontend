/* eslint-disable camelcase */

export interface ISessionData {
  sessions: [ISession];
}

export interface ISession {
  id: number;
  library_id: number;
  user_email: string;
  session_name: string;
  session_time: string;
  session_explainer: string;
  introduce: string;
  document: string;
  admin_approved: string;
}

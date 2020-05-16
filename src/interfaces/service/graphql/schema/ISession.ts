/* eslint-disable camelcase */
import { IUser } from './IUser';
import { ILibrary } from './ILibrary';

export interface ISession {
  id: number;

  library_id: number;
  user_email: string;
  session_name: string;
  session_time: string;
  introduce: string;
  history: string;
  session_explainer: string;
  document: string;
  admin_approved: string;

  createdAt: string;
  updateAt: string;

  user: IUser;
  library: ILibrary[];
}

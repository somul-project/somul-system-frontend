/* eslint-disable camelcase */
import { IUser } from './IUser';
import { ILibrary } from './ILibrary';

export interface IVolunteer {
  id: number;

  library_id: number;
  user_email: string;
  introduce: string;
  history: string;
  admin_approved: string;

  createdAt: string;
  updateAt: string;

  user: IUser;
  library: ILibrary;
}

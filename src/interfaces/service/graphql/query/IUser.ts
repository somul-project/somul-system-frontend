import { IUser } from '../schema/IUser';

export interface IUserData {
  user: IUser;
}

export interface IUserPayload {
  email: string;
}

import { IUser } from 'interfaces/service/graphql/schema/IUser';

export interface IUserData {
  user: IUser;
}

export interface IUserPayload {
  email: string;
}

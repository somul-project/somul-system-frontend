import { ILibrary } from './ILibrary';
import { ISession } from './ISession';
import { IVolunteer } from './IVolunteer';

export interface IUser {
  email: string;
  name: string;
  phonenumber: string;

  createdAt: string;
  updateAt: string;

  librarys: ILibrary[];
  sessions: ISession[];
  volunteers: IVolunteer[];
}

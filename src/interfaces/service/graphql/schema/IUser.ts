import { ILibrary } from 'interfaces/service/graphql/schema/ILibrary';
import { ISession } from 'interfaces/service/graphql/schema/ISession';
import { IVolunteer } from 'interfaces/service/graphql/schema/IVolunteer';

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

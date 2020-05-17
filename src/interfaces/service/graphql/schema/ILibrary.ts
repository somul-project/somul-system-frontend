/* eslint-disable camelcase */
import { IUser } from 'interfaces/service/graphql/schema/IUser';
import { ISession } from 'interfaces/service/graphql/schema/ISession';
import { IVolunteer } from 'interfaces/service/graphql/schema/IVolunteer';

export interface ILibrary {
  id: number;
  name: string;

  location_road: String;
  location_number: String;
  location_detail: String;

  fac_sound: Boolean;
  fac_record: Boolean;
  fac_placard: Boolean;
  fac_self_promo: Boolean;
  fac_need_volunteer: Boolean;
  fac_beam_screan: Boolean;

  latitude: number;
  longitude: number;

  admin_approved: String;

  createdAt: string;
  updateAt: string;

  user: IUser;
  sessions: ISession;
  volunteers: IVolunteer;
}

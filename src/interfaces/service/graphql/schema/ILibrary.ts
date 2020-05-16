/* eslint-disable camelcase */
import { IUser } from './IUser';
import { ISession } from './ISession';
import { IVolunteer } from './IVolunteer';

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

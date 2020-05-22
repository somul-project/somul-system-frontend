export default interface ILoginSession {
  email: string;
  admin: boolean;
  name: string;
  phonenumber: string;
  // eslint-disable-next-line camelcase
  verify_email: boolean;
  statusCode: string;
}

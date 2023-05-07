export interface User {
  _id?: string;
  username: string;
  password?: string;
  email: string;
  role?: string;
  created_at?: Date;
}
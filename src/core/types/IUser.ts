export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  SYNDICATE = 'SYNDICATE',
  RESIDENT = 'RESIDENT',
}

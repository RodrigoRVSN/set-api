export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  ADMIN = 'ADMIN',
  TRUSTEE = 'TRUSTEE',
  VISITOR = 'VISITOR',
}

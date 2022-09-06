export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export type Role = 'ADMIN' | 'TRUSTEE' | 'VISITOR';

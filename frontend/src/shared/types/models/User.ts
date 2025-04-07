interface User {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  username: string;
  password: string;
}

export type UserRegistration = Omit<User, "id">;

export type UserDetails = Pick<User, "id" | "firstName" | "lastName">;

export type UserLogin = Pick<User, "username" | "password">;

export default User;

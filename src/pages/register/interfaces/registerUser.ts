export interface RegisterUser {
  email: string;
  username: string
  password: string;
}
export interface RegisterUserError {
  email?: string;
  username?: string;
  password?: string;
}

export interface RegisterResponse {
  username: string;
  email: string;
}
export type authResponse = {
  id: string | undefined;
  token: string | undefined
  message: string | undefined
}

export type AuthRequest = {
  email: string
  password: string
}

import { userTypeDto } from './userType'

export type userDto = {
  id?: string;
  user_type_id?: string;
  name?: string;
  email?: string;
  password?: string;
  is_validated?: boolean;
  email_token?: string;
  created_at?: Date;
  updated_at?: Date;
  user_type?: userTypeDto;
}

export type userResponseDto = {
  status: number;
  content: userDto;
  message: string
}

export type userResponse = {
  status: number;
  content: {
    id: string;
    user_type_id: string;
    name: string;
    email: string;
    is_validated: boolean;
    email_token: string;
    created_at: Date;
    updated_at: Date;
    user_type: {
      id: string;
      name: string;
      description: string;
      permission_level: number
    }
  }
  message: string
}

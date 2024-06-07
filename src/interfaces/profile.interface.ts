export interface User {
  id: number;
  email: string;
  verified: boolean;
  is_admin: boolean;
  role: string;
  first_name: string;
  last_name: string;
  phone: string;
  profile_picture: string;
}

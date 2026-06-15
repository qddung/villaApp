export type UserRole = 'owner' | 'admin' | 'staff' | 'pending' | 'pending_owner';

export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  role: UserRole;
  created_at: string;
}

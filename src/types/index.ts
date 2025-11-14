export interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  phone: string;
  specialties: string[];
  distance?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}
export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  role: string;
};

export type RegisterRequest = {
  username: string;
  country: string;
  city: string;
  phoneNumber: string;
  tanggalLahir: Date;
  role: string;
  email: string;
  password: string;
};

export type RegisterResponse = {
  email: string;
  username: string;
  country: string;
  city: string;
  phoneNumber: string;
  tanggalLahir: Date;
};

export type AuthRequest = {
  email: string;
  password: string;
  userId: number;
};

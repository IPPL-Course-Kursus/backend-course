export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type RegisterRequest = {
  fullName: string;
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
  fullName: string;
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
export type ResetPasswordRequest = {
  token: string;
  password: string;
};

export type ChangePasswordRequest = {
  userId: number;
  oldPassword: string;
  newPassword: string;
  comfirmNewPassword: string;
};

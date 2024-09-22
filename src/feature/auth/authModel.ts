export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  uid: string;
  fullName: string;
  country: string;
  city: string;
  phoneNumber: string;
  tanggalLahir: Date;
  role: string;
  email: string;
  password: string;
};

export type ForgotPasswordRequest = {
  email: string;
};

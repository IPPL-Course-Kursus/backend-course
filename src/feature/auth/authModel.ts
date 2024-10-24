export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  uid: string;
  fullName: string;
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

export type UserProfile = {
  fullName: string;
  phoneNumber: string;
  tanggalLahir: Date;
  city: string;
};

export type ChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
};

export type ResetPasswordRequest = {
  oobCode: string;
  newPassword: string;
  confirmPassword: string;
};

export type VerifyEmailRequest = {
  oobCode: string;
};

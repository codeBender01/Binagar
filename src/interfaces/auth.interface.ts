export interface PhoneLogin {
  phoneNumber: string;
}

export interface EmailLogin {
  email: string;
}

export interface Verification {
  phoneNumber?: string;
  email?: string;
  code: number;
}

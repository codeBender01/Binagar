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

export interface AuthResponseType {
  accessToken: string;
  user: {
    email: null | string;
    id: string;
    name: string | null;
    phoneNumber: string;
    selectedAddressId: string | null;
    username: string;
  };
}

export interface IFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  confirmPassword?: string;
}
export interface IMessage {
  status: boolean;
  error: boolean;
  message: string;
}

export interface IServerResponse {
  message: string;
}

export interface IImages {
  id: number;
  url: string;
}
export interface IProduct {
  id: string;
  name: string;
  desc: string;
  price: number;
  images: IImages[];
}

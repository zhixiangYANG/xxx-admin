import "axios";

declare module "axios" {
  export interface AxiosInstance<T = any> {
    code: number;
    message: string;
    data: T;
  }
}

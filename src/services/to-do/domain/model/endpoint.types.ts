export enum AuthMethodsEnum {
  LOGIN = 'userLogin',
}

export type Endpoint = {
  [key in AuthMethodsEnum]: {
    path: string;
    method: string;
  };
};

export type Endpoints = {
  v1: Endpoint;
};

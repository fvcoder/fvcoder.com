export interface requireAccessToken {
  accessToken: string;
}

export interface isEnabled {
  enabled: boolean;
}

export type ResponseType<T> = { data: T };

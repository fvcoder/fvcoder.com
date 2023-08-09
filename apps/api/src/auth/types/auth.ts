export class LoginLocalCredentials {
  email: string;
  password: string;
}

export class RefreshToken {
  token: string;
  refreshToken: string;
}

export class Logauth {
  token: string;
}

export enum AuthProvider {
  LOCAL = 'local',
}

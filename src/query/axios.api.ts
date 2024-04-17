/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from 'axios';

import { geApiUrl, getLoprodaProjectId } from '@/utils/environment';

const api = axios.create({
  baseURL: geApiUrl(),
  params: {
    project: getLoprodaProjectId(),
  },
});
/*
api.interceptors.request.use((config) => {
  config.params['project'] = getLoprodaProjectId();

  return config;
});
*/
function setAccessToken(accessToken?: string): void {
  api.interceptors.request.use((config) => {
    config.headers.Authorization = accessToken
      ? `Bearer ${accessToken}`
      : undefined;

    return config;
  });
}

export { api, setAccessToken };

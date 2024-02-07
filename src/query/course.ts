/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { queryOptions } from '@tanstack/react-query';

import { isEnabled, requireAccessToken, ResponseType } from '@/types/query';
import { GetCourseList } from '@/types/query/course.req';

import { api, setAccessToken } from './axios.api';

interface getCourseListProps extends Partial<requireAccessToken>, isEnabled {
  page: number;
}

export function getCourseList(props: getCourseListProps) {
  return queryOptions({
    queryKey: ['course.list', props.page],
    queryFn: async () => {
      setAccessToken(props.accessToken);

      const req = await api.get<ResponseType<GetCourseList>>(`/course`);

      if (!String(req.status).startsWith('2')) {
        throw new Error(req.statusText);
      }

      return req.data.data;
    },
    enabled: props.enabled,
  });
}

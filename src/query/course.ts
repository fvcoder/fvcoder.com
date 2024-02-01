/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { queryOptions } from '@tanstack/react-query';
import axios from 'axios';

import { isEnabled, requireAccessToken, ResponseType } from '@/types/query';
import { GetCourseList } from '@/types/query/course.req';
import { geApiUrl } from '@/utils/enviroment';

interface getCourseListProps extends Partial<requireAccessToken>, isEnabled {
  page: number;
}

export function getCourseList(props: getCourseListProps) {
  return queryOptions({
    queryKey: ['course.list', props.page],
    queryFn: async () => {
      const headers: Record<string, string> = {};
      if (props.accessToken) {
        headers.Authorization = `Bearer ${props.accessToken}`;
      }
      const req = await axios.get<ResponseType<GetCourseList>>(
        `${geApiUrl()}/course`,
        { headers },
      );

      if (!String(req.status).startsWith('2')) {
        throw new Error(req.statusText);
      }

      return req.data.data;
    },
    enabled: props.enabled,
  });
}

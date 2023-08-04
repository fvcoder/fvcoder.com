import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = '6e6e30e9-3314-4ec6-b1cd-ff9515441c8d';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

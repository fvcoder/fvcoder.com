/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { prismic } from '../dom/connect';

export async function getAboutData() {
  return prismic.getByType('about');
}

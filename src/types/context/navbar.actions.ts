import { navbarContent, navbarStyle } from './navbar';

export type navbarSetContentAction = {
  type: 'SET_CONTENT';
  payload: navbarContent[];
};

export type navbarSetStyleAction = {
  type: 'SET_STYLE';
  payload: Partial<navbarStyle>;
};

export type navbarActions = navbarSetContentAction | navbarSetStyleAction;

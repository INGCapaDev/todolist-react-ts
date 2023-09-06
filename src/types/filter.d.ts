import { TODO_FILTERS } from '../consts.ts';

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];

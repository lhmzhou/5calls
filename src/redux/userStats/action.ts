import { Action } from 'redux';
import { UserStatsAction, UserStats } from './index';

export type UserStatsActionType =
  'UPDATE_USER_STATS'
  ;

export interface UserStatsAction extends Action {
  type: UserStatsActionType;
  payload?: {};
}

export interface UpdateUserStatsAction extends UserStatsAction {
  type: 'UPDATE_USER_STATS';
  payload: UserStats;
}

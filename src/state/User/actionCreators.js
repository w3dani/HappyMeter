
import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

export const login = createAction(actionTypes.LOGIN, user => ({ user }));
export const setUser = createAction(actionTypes.SET_USER, user => ({ user }));
export const setProject = createAction(actionTypes.SET_PROJECT, project => ({ project }));
export const reset = createAction(actionTypes.RESET, () => ({}));

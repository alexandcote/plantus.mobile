// @flow

export class Action {
  type: string;
  payload: any;
}

export function createAction(type: string, payload?: {}) {
  return {
    type,
    ...payload,
  };
}

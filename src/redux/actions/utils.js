// @flow

export class Action {
  type: string;
  payload: any;
}

export function createAction(type: string, payload?: any) {
  return {
    type,
    payload,
  };
}

// @flow

export function createAction(type: string, payload?: {}) {
  return {
    type,
    ...payload,
  };
}

export function createRequestAction(type: string, authorized?: boolean, payload?: {}) {
  if (!authorized) {
    return createAction(type, payload);
  }
  return {
    ...createAction(type, payload),
  };
}

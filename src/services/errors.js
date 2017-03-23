// @flow

export const errorMissingFields = (fields: Array<string>) => (
  `Required fields are missing: ${fields.join(', ')}`
);

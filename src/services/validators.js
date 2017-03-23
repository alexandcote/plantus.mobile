// @flow

export const validateMissingFields = (object: Object, requiredFields: Array<string>) => {
  const missing = [];
  requiredFields.forEach(field => {
    if (!object[field]) {
      missing.push(field);
    }
  });
  return missing;
};

// @flow

export const objectToFormData = (data: {}) => {
  const formData = new FormData(); // eslint-disable-line
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });
  return formData;
};

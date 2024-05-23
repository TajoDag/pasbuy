export const checkNull = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== "" && value !== null) {
      acc[key] = value;
    }
    return acc;
  }, {});
};

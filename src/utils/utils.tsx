export const intersection = (a, b) => {
  return a.filter((x) => b.includes(x)); // filter returns an array of elements that are in both arrays
};

export const not = (a, b) => {
  return a.filter((x) => b.indexOf(x) === -1);
};

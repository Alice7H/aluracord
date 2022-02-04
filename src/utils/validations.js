export const isEqual = (val, val2) => {
  return val === val2;
}

export const hasMinLength = (min, val) => {
  return min<= val;
}

export const isEmail = (email) => {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(email);
}

export const format = (value) => {
  if (value < 3) {
    return 3;
  } else if (value > 20) {
    return 20;
  }
  return Number(value);
}

export const formatValues = (values) => {
  for (let i in values) {
    if (values.hasOwnProperty(i)) {
      values[i] = format(values[i]);
    }
  }
  return values;
}
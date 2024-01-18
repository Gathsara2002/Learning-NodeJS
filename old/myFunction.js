const math = (num1, num2, num3, num4) => {
  let a = num1 + num2 * 2;
  if (num3) {
    a += num3 - 5;
  }

  if (num4) {
    a = a * num4;
  }
  return a;
};

export default math;
//module.exports = math;

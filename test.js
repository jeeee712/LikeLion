let firstMul = 1;

const mul = (...args) => {
  for (let i = 0; i < args.length; i++) {
    firstMul *= args[i];
  }
  return firstMul;
};

console.log(mul(1, 2, 3));

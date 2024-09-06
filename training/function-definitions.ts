function add1(v1: number, v2: number): number {
  return v1 + v2;
}

const result1 = add1(2, 3);
console.log(result1);

const add2 = function (v1: number, v2: number): number {
  return v1 + v2;
};

console.log(add2(2, 3));

const add3 = (v1: number, v2: number): number => {
  return v1 + v2;
};

const result3 = add3(2, 3);
console.log(result3);

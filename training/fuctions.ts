function mul1(v1: number, v2: number): number {
  return v1 * v2;
}

const result1 = mul1(2, 3);
console.log(result1);

function mul2(v1: number, v2: number) {
  return v1 * v2;
}

const result2 = mul2(2, 30);
console.log(result2);

// const result3 = mul2(2, "test");
// console.log(result3);

function mul3(v1: any, v2: any) {
  return v1 * v2;
}

const result3 = mul3(2, "test");
console.log(result3);

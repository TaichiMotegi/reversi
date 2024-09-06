function add(v1: number, v2: number) {
  return v1 + v2;
}

function calc(
  v1: number,
  v2: number,
  callback: (a: number, b: number) => number
): number {
  return callback(v1, v2);
}

const result = calc(2, 3, add);
console.log(result);

const hello = () => {
  console.log("Hello");
};

setTimeout(hello, 1000);

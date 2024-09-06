const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.forEach((num, i) => {
  const double = num * 2;
  console.log(`${i}:double`);
});

const names = ["Alice", "Bob", "Charlie"];
const users = names.map((name, i) => {
  return {
    id: i,
    name: name,
  };
});
console.log(users);

const evenIdUsers = users.filter((user) => {
  return user.id % 2 === 0;
});
console.log(evenIdUsers);

const sum = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sum);

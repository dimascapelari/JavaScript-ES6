// 3 filter
const arr = [1, 2, 3, 4, 5];

console.log(arr);

const higNumbers = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(higNumbers);

const users = [
  { name: "Dimas", available: true },
  { name: "Mariana", available: false },
  { name: "Maria Luiza", available: true },
  { name: "Capelari", available: false },
];

const availableUsers = users.filter((user) => user.available);
const notAvailableUsers = users.filter((user) => !user.available);

console.log(availableUsers);
console.log(notAvailableUsers);

const casual = require("casual");

// console.log(casual.city, casual.integer(1, 10));
// console.log(casual.name_prefix, casual.first_name, casual.last_name);
// const randomPerson = () => {
//   return `${casual.name_prefix} ${casual.full_name}`;
// };
// console.log(randomPerson());

// function randomNum() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// console.log(randomNum(casual));

// const age = 2022 - casual.year;
// const result = [
//   casual.name_prefix,
//   casual.first_name,
//   casual.last_name,
//   casual.address,
//   casual.city,
//   casual.country,
//   casual.email,
//   casual.password,
//   age,
//   2022 - casual.year,
//   casual.year,
//   casual.month_name,
//   casual.color_name,
// ];
const sex = ["male", "female", "other"];
const randomSex = sex[casual.integer(0, 2)];

casual.define("user", () => ({
  firstName: casual.first_name,
  lastName: casual.last_name,
  sex: randomSex,
  address: {
    country: casual.country,
    city: casual.city,
    street: casual.street,
  },
  email: casual.email,
  password: casual.password,
}));
console.log(casual.user);

// console.log(result);

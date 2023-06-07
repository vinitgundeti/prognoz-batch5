// var result = function(x,y){
//     return x+y;
// }

var result = (x, y) => x + y;

console.log(result(10, 20));

const numbers = [1, 2, 3];
console.log("old arr : ", numbers);
const addTwo = numbers.map((value) => {
  return value + 2;
});

console.log("new arr : ", addTwo);

const ages = [10, 20, 28, 18, 13, 40, 50];

const childs = ages.filter((value) => {
  return value < 18;
});

console.log("In above list following ages childrens are there : ", childs);

const foodMenu = [
  {
    foodName: "Veg Sandwich",
    price: 120,
    isVeg: true,
  },
  {
    foodName: "Chicken Biryani",
    price: 300,
    isVeg: false,
  },
  {
    foodName: "Chicken Noodles",
    price: 130,
    isVeg: false,
  },
  {
    foodName: "Chicken Triple Rice",
    price: 150,
    isVeg: false,
  },
];

const billAmount = foodMenu.reduce((prev, curr) => {
  debugger;
  return prev + curr.price;
}, 0);

console.log("Your Total Bill Is : ", billAmount);

// const lessThan150 = foodMenu.filter((item)=> item.price<150)
// const vegFoodItems = foodMenu.filter((item)=> item.isVeg)

// console.log("Following food items are in less than 150 Rs : ", lessThan150)
// console.log("Veg food items : ", vegFoodItems)

var identify = (age) => (age >= 18 ? "He/she is Adult" : "He/she is child");

console.log(identify(16));

let employees = [
  {
    name: "John",
    Salary: 20000,
    location: "California",
  },
  {
    name: "Bob",
    Salary: 30000,
    location: "LA",
  },
  {
    name: "Ram",
    Salary: 50000,
    location: "India",
  },
  {
    name: "Dev",
    Salary: 40000,
    location: "India",
  },
  {
    name: "Jonathon",
    Salary: 50000,
    location: "California",
  },
];

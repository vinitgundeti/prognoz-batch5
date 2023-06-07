console.log("Hello Javascript")

let food = {
    name: "Veg Sandwich",
    price: 120,
    image: "",
    isVeg: true,
    categories: ['veg','sandwich','bread']
}

let customer = {
    name: "John",
    age: 25,
    orders: [
        {
            foodName: 'Veg Sandwich',
            price: 120
        },
        {
            foodName: 'Veg Momos',
            price: 60
        },
        {
            foodName: 'Fries',
            price: 40
        },
    ]
}

console.log("Name : ", food.name)
console.log("Price : ",food.price)

console.log("categories : ",food.categories[1])

console.log("first ordered food : ",customer.orders[0].foodName)

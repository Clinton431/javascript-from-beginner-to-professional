// create an array to hold the inventory of store items 
const inventory = [];

// creating items with properties: name, model, cost, and quantity

const item1 = {
    name: "Laptop",
    model: "ABC123",
    cost: 9999,
    quantity: 10
};

const item2 = {
    name: "Smartphone",
    model: "Huawei",
    cost: 9844,
    quantity: 20
};
const item3 = {
    name: "Headphones",
    model: "Oppo",
    cost: 145,
    quantity: 30
};

// add items to the inventory array
inventory.push(item1, item2, item3);

// log the inventory to the console
console.log("Inventory:", inventory);

// Access the quantity of the third item
console.log("Quantity of the third item:", inventory[2].quantity);

// Adding and accessing more elements within inventory;
const newItem = {
    name: "Tablet",
    model: "PQRS",
    cost: 277,
    quantity: 16
};
inventory.push(newItem);

// Accessing and logging the added item
console.log("Newly added item", inventory[inventory.length - 1]);

//updating the quantity of the seconf item
inventory[1].quantity += 5;

console.log("Updated quantity of the second item:", inventory[1].quantity);
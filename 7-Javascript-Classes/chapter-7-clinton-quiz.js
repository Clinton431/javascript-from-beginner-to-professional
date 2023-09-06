// Create a class to track the employees of a company:
// 1. Use first names, last names, and the number of years worked as values in the
// constructor.
// 2. Create two or more people with values for their first names, last names, and
// the number of years they've worked at the company. Add the people into an
// array.
// 3. Set up a prototype to return the details of the person's first and last names
// and how long they've worked at the company.
// 4. Iterate the contents of the array to output the results into the console, adding
// some text to make the output a full sentence.

class Employee {
    constructor(firstname, lastname, yearsWorked) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.yearsWorked = yearsWorked;
    }

    getEmployeeDetails() {
        return `${this.firstname} ${this.lastname} has worked at the company for ${this.yearsWorked} years.`;
    }
}

// Create two or more employees in an array

const employee1 = new Employee("James", "Kamau", 5);
const employee2 = new Employee("Jane", "Nyokabi", 3);

// storing the employees in an array

const employees =  [employee1, employee2];

//iterating through the array

for (const employee of employees) {
    console.log(employee.getEmployeeDetails());
}


// Create a class which will allow you to work out the combined price of a number of
// items, and interact with it to work out the total cost of different orders.
// 1. Create a class that contains the prices of two menu items as private field
// declarations.
// 2. Use the constructor in the class to get the argument values (how many of
// each item are being bought).
// 3. Create a method to calculate and return the total cost depending on how
// many of each item the user selects.
// 4. Use a getter property to grab the value output by the calculation method.
// 5. Create two or three objects with different combinations of menu selections,
// and output the total cost in the console.


class MenuCalculator {
    #item1Price;
    #item2Price;

    constructor(item1Price, item2Price) {
        this.#item1Price = item1Price;
        this.#item2Price = item2Price;
    }

    calculateTotalCost(item1Quantity, item2Quantity) {
        const totalCost = item1Quantity * this.#item1Price + item2Quantity * this.#item2Price;
        return totalCost;
    }

    get totalCost() {
        return this.calculateTotalCost;
    }
}

// create an instance of menuCalculator with menu item prices

const menuCalculator = new MenuCalculator(3, 4);

//Calculating the output
const order1Total = menuCalculator.calculateTotalCost(3, 6);
console.log(`Total cost for Order 1: $${order1Total}`);

const order2Total = menuCalculator.calculateTotalCost(5, 3);
console.log(`Total cost for order 2: $${order2Total}`);

const order3Total = menuCalculator.calculateTotalCost(2, 4);
console.log(`Total cost for Order 3: $${order3Total}`);
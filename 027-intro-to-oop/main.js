class Person {
    constructor(firstName, lastName, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    showStatus() {
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Address: ${this.address}`);
    }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address);
        this.classList = classList;
    }
    showStatus() {
        console.log(`${this.firstName} is taking these classes: ${this.classList}`);
    }
}

const zach = new Student('Zach', 'Smith', '123 Main St.', ["CIT 93", "CIT 28", "AFRAM 1"]);

zach.showStatus();

const jane = new Person('Jane', 'Doe', '456 Main St.');

jane.showStatus();
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

const zach = new Person('Zach', 'Smith', '123 Main St.');

zach.showStatus();

const jane = new Person('Jane', 'Doe', '456 Main St.');

jane.showStatus();
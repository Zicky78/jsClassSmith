class Person {
    constructor(firstName, lastName, address) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
    }
    getFirstName() {
        return `${this._firstName}`;
    }
    setFirstName(newFirstName) {
        this._firstName = newFirstName;
    }
    getLastName() {
        return `${this._lastName}`;
    }
    setLastName(newLastName) {
        this._lastName = newLastName;
    }
    getAddress() {
        return `${this._address}`;
    }
    setAddress(newAddress) {
        this._address = newAddress;
    }
    showStatus() {
        console.log(`Name: ${this.getFirstName()} ${this.getLastName()}`);
        console.log(`Address: ${this.getAddress()}`);
    }
}

class Student extends Person {
    constructor(firstName, lastName, address, classList) {
        super(firstName, lastName, address);
        this._classList = classList;
    }
    getClassList() {
        return `${this._classList}`;
    }
    setClassList(newClassList) {
        this._classList = newClassList;
    }
    showStatus() {
        console.log(`${this.getFirstName()} is taking these classes: ${this.getClassList()}`);
    }
}

const zach = new Student('Zach', 'Smith', '123 Main St.', ["CIT 93", "CIT 28", "AFRAM 1"]);

zach.showStatus();

const jane = new Person('Jane', 'Doe', '456 Main St.');

jane.showStatus();

console.log(zach.getFirstName());
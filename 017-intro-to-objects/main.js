const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)

const myNumber = 9
const myObj = {
    name: 'Zach',
    age: 24,
    hobbies: ['Coding', 'Piano', 'Video Games'],
    mobile: {
        make: 'Samsung',
        model: 'Galaxy S21 Ultra',
        OS: 'Android'
    },
    myGreeting: function(person) {
        return 'Whats up, ${person}?'
    }
}

const greeting = myObj.myGreeting('Bobby')
console.log(greeting)

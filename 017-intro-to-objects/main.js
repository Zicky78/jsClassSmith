const myArr = []

// console.log(typeof myObj)
// console.log(typeof myArr)
// console.log(myArr === myObj)

const myNumber = 9
const myObj = {
    name: 'Zach',
    age: 24,
    likes: 0,
    hobbies: ['Coding', 'Piano', 'Video Games'],
    mobile: {
        make: 'Samsung',
        model: 'Galaxy S21 Ultra',
        OS: 'Android'
    },
    myGreeting: function(person) {
        return `${this.name}, who plays too many ${this.hobbies[2]} says: "Whats up, ${person}?"`
    },
    increaseLikes: function() {
        this.likes += 1
    }
}

const greeting = myObj.myGreeting('Bobby')
console.log(greeting)

const student = {
    name: 'Bill',
    studentId: '123-4567',
    testScores: [],
    academicProbation: false,
    addTestScore: function (testScore) {
        this.testScores.push(testScore)
    },
    calculateGrade: function() {
        let grade = 0
        this.testScores.forEach(test => {
            grade += test
        })
        return grade / this.testScores.length
    }
}

student.addTestScore(79)
student.addTestScore(84)
student.addTestScore(91)
console.log(student.calculateGrade().toFixed(2))

console.log(myObj.name[1])

// Testing some methods

// String.repeat(n) and String.toUpperCase()
function cheerFor(student) {
    let cheer = student.name + '! '
    console.log(cheer.toUpperCase().repeat(5))
}

cheerFor(student)

// Array.map() 
function curveGrading(student) {
    console.log(student.testScores.map(grade => grade*1.15))
}

curveGrading(student)

// Array.reduce()
// Also ternaries are fun, even if they are sometimes less readable
// Admittedly I haven't used map/reduce a whole lot even though they are super useful, so this was good practice
function highestTestScore(student) {
    console.log(student.testScores.reduce((prev, cur) => cur > prev ? cur : prev )) 
}

highestTestScore(student)

for(key in myObj) {
    console.log(`key ${key} and value ${myObj[key]}`)
}

const zachObj = myObj
zachObj.increaseLikes()
console.log(zachObj.likes)
console.log(myObj.likes)
zachObj = 25
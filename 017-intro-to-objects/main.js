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
        return `${this.name}, who plays too many ${this.hobbies[2]} says: "Whats up, ${person}?"`
    }
}

const greeting = myObj.myGreeting('Bobby')
console.log(greeting)

const student = {
    name: 'Bob',
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

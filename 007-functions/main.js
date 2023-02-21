//Functions are fun!

//-------------------------------------------------------
// function doMath (a) {
//     let result = a
//     console.log(`Result: ${result}`)
// }

// doMath(10)
//-------------------------------------------------------

//-------------------------------------------------------
// function doMath (a) {
//     console.log(`Result: ${a}`)
// }

// doMath(10)
//-------------------------------------------------------

//-------------------------------------------------------
// function doMath (a, b) {
//     console.log(`Result: ${a + b}`)
//     console.log(`Result: ${a - b}`)
//     console.log(`Result: ${a * b}`)
//     console.log(`Result: ${a / b}`)
// }

// doMath(10, 4)
//-------------------------------------------------------

//-------------------------------------------------------
// function doMath (a, b) {
//         let result = a * b
//         return result
//     }
    
// let returnValue = doMath(10, 4) // console.log(doMath(10, 4)) 
// console.log(`this result was returned from the function: ${returnValue}`)
//-------------------------------------------------------

//-------------------------------------------------------
// function doMath (a, b) {
//     let result = a * b
//     return result
// }

// const result = doMath(10, 4) 
// console.log(`this result was returned from the function: ${result}`)
//-------------------------------------------------------

// ----- MY VARIABLE CODE -----

// function calcBudget(paycheck, utilities, rent, phone, car, subscriptions){

//     let budget = paycheck - utilities - rent - phone - car - subscriptions
//     let savings = budget*0.45
//     let balance = budget - savings
//     let budgetReport = `The remaining budget after bills is: $${budget} \n$${savings}(45%) should go into savings \nRemaining total is: $${balance}`

//     return budgetReport
    
// }

// console.log(calcBudget(2500, 400, 370, 100, 415, 30))

//-------------------------------------------------------
// doMoreMath = (a, b) => a * b
// console.log(doMoreMath(20, 30))
//-------------------------------------------------------

// ----- MY ARROW FUNCTION -----

calcBudget = (paycheck, utilities, rent, phone, car, subscriptions) => {

    let budget = paycheck - utilities - rent - phone - car - subscriptions
    let savings = budget*0.45
    let balance = budget - savings // I didn't notice I forgot let here for my other submission, but it didnt throw an error so I missed it
    let budgetReport = `The remaining budget after bills is: $${budget} \n$${savings}(45%) should go into savings \nRemaining total is: $${balance}`

    return budgetReport
    
}

console.log(calcBudget(2500, 400, 370, 100, 415, 30))

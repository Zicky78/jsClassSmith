const updateDOM = (input) => {
    const divEL = document.querySelector("#output")
    const h2 = document.createElement('h2')
    h2.textContent = input
    h2.style.color = '#25A341'
    divEL.appendChild(h2)
}

const MY_MPG = []
const MY_TRIP_COST = []

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = miles/gallons
    const tripCost = gallons * price
    MY_MPG.push(MPG)
    MY_TRIP_COST.push(tripCost)
    return `MPG: ${MPG.toFixed(2)} \n Trip Cost: $${tripCost.toFixed(2)}`
}

const calculateAvgMPG = () => {
    let totalMPG = 0
    for(let i = 0; i < MY_MPG.length; i++){
        totalMPG += MY_MPG[i]
    }

    let avgMPG = totalMPG/MY_MPG.length
    updateDOM(`Average MPG is: ${avgMPG.toFixed(2)}`)
}

const calculateAvgCost = () => {
    let totalCost = 0
    for(let i = 0; i < MY_TRIP_COST.length; i++) {
        totalCost += MY_TRIP_COST[i]
    }

    let avgCost = totalCost/MY_TRIP_COST.length
    updateDOM(`Average Cost is: $${avgCost.toFixed(2)}`)
}

const calculateSum = (arr) => {
    let sum = 0
    for(let i =0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

const calculateAvg = () => {
    let sumMPG = calculateSum(MY_MPG)
    let sumTripCost = calculateSum(MY_TRIP_COST);
    
    let avgMPG = sumMPG/MY_MPG.length
    let avgTripCost = sumTripCost/MY_TRIP_COST.length

    updateDOM(`Average MPG is ${avgMPG.toFixed(2)}`)
    updateDOM(`Average Trip Cost is $${avgTripCost.toFixed(2)}`)
}

updateDOM(trackMPGandCost(300, 10, 5.40))
updateDOM(trackMPGandCost(320, 20, 3.20))
updateDOM(trackMPGandCost(100, 7, 4.40))
updateDOM(trackMPGandCost(600, 24, 5.70))
updateDOM(trackMPGandCost(50, 2, 3.40))
updateDOM(trackMPGandCost(320, 20, 3.20))
updateDOM(trackMPGandCost(320, 12, 5.00))

calculateAvgMPG()
calculateAvgCost()

calculateAvg()


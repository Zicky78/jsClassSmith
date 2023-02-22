const updateDOM = (input) => {
    const divEL = document.querySelector("#output")
    const h2 = document.createElement('h2')
    h2.textContent = input
    h2.style.color = '#25A341'
    divEL.appendChild(h2)
}

const myMPG = []
const myTripCost = []

const trackMPGandCost = (miles, gallons, price = 3.79) => {
    const MPG = miles/gallons
    const tripCost = gallons * price
    myMPG.push(MPG)
    myTripCost.push(tripCost)
    return `MPG: ${MPG.toFixed(2)} \n Trip Cost: $${tripCost.toFixed(2)}`
}

const calculateAvgMPG = () => {
    let totalMPG = 0
    for(let i = 0; i < myMPG.length; i++){
        totalMPG += myMPG[i]
    }

    let avgMPG = totalMPG/myMPG.length
    updateDOM(`Average MPG is: ${avgMPG.toFixed(2)}`)
}

const calculateAvgCost = () => {
    let totalCost = 0
    for(let i = 0; i < myTripCost.length; i++) {
        totalCost += myTripCost[i]
    }

    let avgCost = totalCost/myTripCost.length
    updateDOM(`Average Cost is: $${avgCost.toFixed(2)}`)
}

const calculateAvg = () => {
    let sumMPG = 0
    let sumTripCost = 0
    for(let i = 0; i < myMPG.length; i++) {
        sumMPG += myMPG[i]
        sumTripCost += myTripCost[i]
    }
    let avgMPG = sumMPG/myMPG.length
    let avgTripCost = sumTripCost/myTripCost.length

    updateDOM(`Average MPG is ${avgMPG.toFixed(2)}`)
    updateDOM(`Average Trip Cost is ${avgTripCost.toFixed(2)}`)
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


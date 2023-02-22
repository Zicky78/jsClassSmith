const updateDOM = (input) => {
    const divEL = document.querySelector("#output")
    const h2 = document.createElement('h2')
    h2.textContent = input
    h2.style.color = '#25A341'
    divEL.appendChild(h2)
}

const myMPG = []
const myTripCost = []

const trackMPGCost = (miles, gallons, price = 3.79) => {
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
    updateDOM(`Average MPG is ${avgMPG.toFixed(2)}`)
}

updateDOM(trackMPGCost(300, 10, 5.40))
updateDOM(trackMPGCost(320, 20, 3.20))
updateDOM(trackMPGCost(100, 7, 4.40))
updateDOM(trackMPGCost(600, 24, 5.70))
updateDOM(trackMPGCost(50, 2, 3.40))
updateDOM(trackMPGCost(320, 20, 3.20))
updateDOM(trackMPGCost(320, 12, 5.00))

calculateAvgMPG()


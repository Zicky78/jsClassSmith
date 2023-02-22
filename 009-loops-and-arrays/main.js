const updateDOM = (input) => {
    const divEL = document.querySelector("#output")
    const h2 = document.createElement('h2')
    h2.textContent = input
    h2.style.color = '#25A341'
    divEL.appendChild(h2)
}

const myArr = []

const trackMPGCost = (miles, gallons, price = 3.79) => {
    const MPG = miles/gallons 
    const tripCost = gallons * price
    myArr.push(MPG, tripCost)
    return `MPG: ${MPG} \n Trip Cost: $${tripCost}`
}

updateDOM(trackMPGCost(300, 10, 5.40))
updateDOM(trackMPGCost(320, 20, 3.20))
updateDOM(myArr)

const calculateAvg = () => {
    const avgMPG = myArr[0] + myArr[2] / 2
    updateDOM(`Average Miles Per Gallon is: ${avgMPG}`)
}

calculateAvg()
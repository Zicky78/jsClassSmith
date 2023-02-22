const updateDOM = (input) => {
    const divEL = document.querySelector("#output")
    const h2 = document.createElement('h2')
    h2.textContent = input
    h2.style.color = '#25A341'
    divEL.appendChild(h2)
}

updateDOM('and put the FUN in functions!')

const mileage = (miles, gallons, price = 3.79) => miles/gallons * price

updateDOM(mileage(300, 10, 5.40))

const acceleration = (initialV, finalV, startTime, endTime) => { return (finalV-initialV)/(endTime-startTime)}

updateDOM(`${acceleration(20, 39, 0, 3)} m/s\u{00B2}`)

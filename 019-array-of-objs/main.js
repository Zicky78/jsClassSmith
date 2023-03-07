const updateDOM = (input, id) => {
	const divEL = document.getElementById(id);
	const h3 = document.createElement('h3');
	h3.textContent = input;
	divEL.appendChild(h3);
};

const myArrObjs = [
    {
        name: 'Zach',
        hairColor: 'Brown'
    },
    {
        name: 'Francis',
        hairColor: 'Green'
    },
    {
        name: 'Ted',
        hairColor: 'Purple'
    }
]

myArrObjs.forEach(obj => {
    const str = `${obj.name} has ${obj.hairColor} hair color`
    updateDOM(str, 'output')
})
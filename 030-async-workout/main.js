const formEL = document.getElementById('form');
const outputEL = document.getElementById('output');

formEL.addEventListener('submit', (e) => {
    e.preventDefault();
    let type = e.target.type.value;
    let reps = parseFloat(e.target.reps.value);
    let time = parseFloat(e.target.time.value);
    formEL.reset();

});
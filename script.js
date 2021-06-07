const container = document.querySelector("#container");

const numbergetter = () => {
    let number = parseInt('Enter a number between 1 and 100');
    if (number){}
};

const create2grids = () => {
    for (let i = 1; i <= 16 * 16; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        box.addEventListener('mouseover', addColor)
    }
};
const addColor = (e) => {
    e.target.classList.add('passedOver')
};



create2grids();




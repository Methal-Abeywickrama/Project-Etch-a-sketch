const container = document.querySelector("#container");
const submit = document.querySelector("#submit");
const root = document.querySelector(":root");
const totalWidth = window.screen.width;
console.log (totalWidth);

const rootSetter = (num) => {
    let boxwidth = 600 / num;
    let boxwidthString = boxwidth + "px";
    let leftMargin = totalWidth / 4;
    console.log(window.screen.width)
    console.log(leftMargin);
    root.style.setProperty('--num', num);
    root.style.setProperty('--length', boxwidthString);
    root.style.setProperty('--leftMargin', leftMargin);
}



const createFirstGrid = () => { 
    for (let i = 1; i <= 16 * 16; i++) {
        const box = document.createElement('div');

        container.appendChild(box);
        box.classList.add('box');
        box.addEventListener('mouseover', addColor)
    }
};
const addColor = (e) => {
    e.target.classList.add('passedOver')
};


const gridNumberGetter = () => {
    let userInput = parseInt(prompt("enter a number between 1 and 100"));
    if (userInput <= 1 || userInput >= 100) {
        gridNumberGetter ();
    };
    return userInput;

};

const boxRemover = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

const createNextGrid = (num) => {
    for (let i = 1; i <= num * num; i++) {
        const box = document.createElement('div');
        container.appendChild(box);
        rootSetter(num);
        container.classList.toggle("container");
        container.classList.toggle("container");
        box.classList.add('box');
        box.addEventListener('mouseover', addColor);

    }
}

//createFirstGrid(16);
createNextGrid(16);

submit.addEventListener('click', function () {
    boxRemover (container);
    createNextGrid (gridNumberGetter ());
});

console.log(window.screen.width);




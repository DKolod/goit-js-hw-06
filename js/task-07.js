const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', getSize)
console.log(inputEl.value);


function getSize(event) {
    
    textEl.style.fontSize = `${inputEl.value}px`;
    console.log(inputEl.value);
    
}




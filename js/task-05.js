const refs = {
    input: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output'),
}
refs.input.addEventListener('input', oninputChange);

function oninputChange(event) {
    // console.log(event.currentTarget.value);
   
if(event.currentTarget.value === ''){
    return refs.nameEl.textContent = "Anonymous"
    }
    return refs.nameEl.textContent = event.currentTarget.value;
}




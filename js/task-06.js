
const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('blur',oninputChange)
 
function oninputChange(event) {

    if (event.currentTarget.value.length !== Number(refs.input.dataset.length)) {
        refs.input.classList.add('invalid');
             
    } else {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    }
}


    


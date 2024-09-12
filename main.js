const inputBox =  document.querySelector('input')
const submitBTN = document.querySelector('#submit');
const errorMessage = document.querySelector('.errorMessage')
const errorIMG = document.querySelector('#errorImg');
const inputContainer = document.querySelector('.inputWrapper');



function getInputText(){
    let inputText= "";
    inputText = inputBox.value;
    console.log(inputText)
    const simpleEmailRegex = /\S+@\S+\.\S+/;
    if(!simpleEmailRegex.test(inputText)){
        if(errorMessage.classList.contains('hide')){
            errorMessage.classList.remove('hide')
            errorIMG.classList.remove('hide')
            console.log(inputText)
            return
        }
        
    }else{
        errorMessage.classList.add('hide')
        errorIMG.classList.add('hide')
        alert("Thank you for submitting your email")
        console.log(inputText)  
    }

}

submitBTN.addEventListener('click', getInputText)

window.addEventListener('click', e =>{
    if(inputBox.contains(e.target)){
        inputContainer.classList.add('inputFocused')
        submitBTN.style.right ='-2px'
    }else{
        inputContainer.classList.remove('inputFocused')
    }
})
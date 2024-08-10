const signUpButton = document.getElementById('signupbutton');
var firstName = document.getElementById('firstname-input');
var secondname  = document.getElementById('secondname-input');
var emailInput = document.getElementById('email-input');
var telInput = document.getElementById('tel-input');
var Residence = document.getElementById('Residence');
var selectInput = document.getElementById('select-input');
var createPassword = document.getElementById('password-input');
var confirmPassword = document.getElementById('confim-password-input');

var passwordError = document.getElementById('password-error')
// firstName.value = 'name'
signUpButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (firstName.value == '') {
        firstName.style.border = 'solid 1px red'

    } else {
    
    }

    secondname.addEventListener('click', () => {
        if (firstName.value == '') {
            firstName.style.border = 'solid 1px red'
        } else {
            firstName.style.border = 'solid 1px #0ef'
        }
        if (emailInput.value == '') {
            emailInput.style.border = 'solid 1px red'
        } else { 
            emailInput.style.border = 'solid 1px #0ef'
        }
    })

    if (secondname.value == '') {
        secondname.style.border = 'solid 1px red'

    } else {
        
    }

    emailInput.addEventListener('click', () => {
        if (firstName.value == '') {
            firstName.style.border = 'solid 1px red'
        } else {
            firstName.style.border = 'solid 1px #0ef'
        }
        if (emailInput.value == '') {
            emailInput.style.border = 'solid 1px red'
        } else { 
            emailInput.style.border = 'solid 1px #0ef'
        }
        if (secondname.value == '') {
            secondname.style.border = 'solid 1px red'
        } else {
            secondname.style.border = 'solid 1px #0ef'
        }
    })

    if (emailInput.value == '') {
        emailInput.style.border = 'solid 1px red'
  
    } else {
        
        
    }
    if (telInput.value == '') {
        telInput.style.border = 'solid 1px red'

    } else {
        
        
    }
    if (Residence.value == '') {
        Residence.style.border = 'solid 1px red'

    } else {
        
        
    }
    if (createPassword.value == '') {
        createPassword.style.border = 'solid 1px red'

    } else if(createPassword.value != confirmPassword.value) {
        
        passwordError.innerHTML = 'Password does not match, please check your password and refill'
        passwordError.style.color = 'red'
        createPassword.style.border = 'solid 1px red'
         confirmPassword.style.border = 'solid 1px red'
    }
    else{
        location.replace('index.html')
    }

    if (confirmPassword.value == '') {
        confirmPassword.style.border = 'solid 1px red'
    } else {
        
       
    }
}

)
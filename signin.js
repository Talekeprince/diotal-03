document.querySelector('#create-acc-btn').addEventListener('click', (e) => {
    e.preventDefault();
    location.replace('signup.html');
})

var switchesEl = document.getElementById('switches');
var switchSignChoice = document.querySelector('#signWithnumber')

//   switchSignChoice.innerHTML =""

switchSignChoice.addEventListener('click', (e) =>{

    e.preventDefault()
    emailInput.innerHTML = `
              <div id="phone-number-switch">
                    <span
                        style="border-bottom: solid 1px grey; padding: 12px 0px; border-right: solid 1px grey; padding-right: 10px;">+237</span><input
                        style="width: 490px; border: none; background-color: transparent; border-bottom: solid 1px grey;"
                        type="tel" name="tel" id="tel-input" placeholder="Enter Moblie Number">
                </div>
    `
    switchSignChoice.innerHTML = ` <button onclick='location.replace("signin.html")'>Email sign in</button>`

});

// ===================================================SIGNIN BUTTON CUSTOMIZATION
const signin = document.getElementById('signupbutton');
let emailInputField = document.getElementById('email-input');
let passwordInputField = document.getElementById('password-input');
let errorField = document.querySelector('.error-field');

signin.addEventListener('click', (e) => {
    e.preventDefault()
    if (emailInputField.value === '' && passwordInputField.value === '') {
        errorField.innerHTML = 'Invalid fields, please fill the inputs bellow'
        emailInputField.style.border = '1px solid red'
        passwordInputField.style.border = '1px solid red'
        setTimeout(() => {
            errorField.innerHTML = ''
            emailInputField.style.border = '1px solid #0ef'
        passwordInputField.style.border = '1px solid #0ef'
        },4000 );
    } else if(emailInputField.value == '' && passwordInputField.value !== ''){
        errorField.innerHTML = 'Please enter your correct email address'
        emailInputField.style.border = '1px solid red';
        setTimeout(() => {
            errorField.innerHTML = '';
            emailInputField.style.border = '1px solid #0ef';
        },4000 );
    }else if(emailInputField.value !== '' && passwordInputField.value === ''){
        errorField.innerHTML = 'Please enter your password bellow'
        passwordInputField.style.border = '1px solid red';
        setTimeout(() => {
            errorField.innerHTML = '';
        passwordInputField.style.border = '1px solid #0ef';
        },4000 );
       
    }else{
        let emailCheck = emailInputField.value;
        emailCheck.includes('@')? location.replace('refer.html') : errorField.innerHTML = `Invalid email input, 
        must include "@" at email input`; emailInputField.style.border = '1px solid red';
    }
});
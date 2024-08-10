const registerBtn = document.querySelector('.register-button');
var form_input = document.getElementById('form-input');

form_input.innerHTML = ''
form_input.style = 'padding:0px'

registerBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    form_input.innerHTML = `
           <form action="post">
                <a style='color:white; background:black; width:fit-content; padding:6px;' href='service.html'>Go Back</a>
                <div>
                    <label for="text">Full names</label>
                    <br>
                    <input type="text" name="text" id="" placeholder="enter full names">
                </div>
                <div>
                    <label for="text">Service category</label>
                    <br>
                    <input type="text" name="text" id="" placeholder="example: teacher, doctor, electrician...">
                </div>
                <div>
                    <label for="eamail">Email address</label>
                    <br>
                    <input type="email" name="email" id="" placeholder="email@example.com">
                </div>
                <div>
                    <label for="telephone">Enter tel</label>
                    <br>
                    <input type="tel" name="telephone" id="" placeholder="enter telephone number">
                </div>
                <div>
                    <label for="text">Location</label>
                    <br>
                    <input type="text" name="text" id="" placeholder="example: Southwest / Buea">
                </div>
                <div>
                    <label for="password">Enter password</label>
                    <br>
                    <input type="password" name="password" id="" placeholder="Password must be at least 7 characters">
                </div>
                <div>
                    <label for="password">Confirm password</label>
                    <br>
                    <input type="password" name="password" id="" placeholder="Confirm password">
                </div>
                <span style="padding: 20px;">
                    <input style="width: 50px;" type="checkbox" name="checkbox" id=""> <span>Agree to all <a href="terms.html">terms and
                        conditions </a></span>
                </span>
                <div>
                    <input id style="color: white; background-color: rgb(255, 174, 0); cursor: pointer;" type="button"
                        value="Register">
                </div>
            </form>

    `
    form_input.style = 'padding:20px'

})
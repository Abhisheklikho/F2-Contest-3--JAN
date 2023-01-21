let nameInput = document.getElementById('fname');
let emailInput = document.getElementById('femail');
let passwordInput = document.getElementById('password');
let confirmpasswordInput = document.getElementById('confirmpassword');
let button = document.getElementById('btn');
let message = document.getElementById('message');

function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
function validatePassword(password) {
    var re = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return re.test(password);
}

button.addEventListener("click", function (event) {
    event.preventDefault()

})
button.addEventListener("click", validate)

function validate(e) {
    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmpassword = confirmpasswordInput.value;

    if (name.length >= 2) {
        if (ValidateEmail(email)) {

            if (validatePassword(password)) {
                if (password === confirmpassword) {
                    console.log("go ahead")
                    message.innerText = "go ahead";
                    message.style.color = "green";
                }
            }
            else {
                message.innerText = "validation failed";
                message.style.color = "red";
                console.log("validation failed")
            }

        }
    }
}
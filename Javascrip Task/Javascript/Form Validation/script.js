document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    togglePassword.addEventListener("click", function () {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        this.classList.toggle("bi-eye-slash");
        this.classList.toggle("bi-eye");
    });

    toggleConfirmPassword.addEventListener("click", function () {
        const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
        confirmPasswordInput.setAttribute("type", type);
        this.classList.toggle("bi-eye-slash");
        this.classList.toggle("bi-eye");
    });

});


document.addEventListener("DOMContentLoaded", function () {
    showPersonalData();
});

function showPersonalData() {


    var person = JSON.parse(sessionStorage.getItem('person'));

    if (person) {


        document.getElementById("name").value = person.name;
        document.getElementById('dob').value = person.dob;
        document.getElementById('number').value = person.number;
        document.getElementById('email').value = person.email;
       
        document.getElementById('address').value = person.address;
        document.getElementById('marital-status').value = person.maritalStatus;
        document.getElementById('password').value = person.password;
        console.log(person.gender);
        if (person.gender == 'Male') {
            document.getElementById('male').checked = true;

        }
        if (person.gender == 'Female'){
            document.getElementById('female').checked = true;
        }

        var f = document.forms['inputForm'];
        for (var i = 0, fLen = f.length; i < fLen; i++) {
            f.elements[i].readOnly = true;
        } nt.getElementById('display-form').readOnly = true; 




    } else {
        personalDataDiv.innerHTML = "<p>No personal data found.</p>";
    }
}


function Person(name, dob, number, email, gender, address, maritalStatus, password) {
    this.name = name;
    this.dob = dob;
    this.number = number;
    this.email = email;
    this.gender = gender;
    this.address = address;
    this.maritalStatus = maritalStatus;
    this.password = password;
}

function validateForm(event) {
    
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var dob = document.getElementById('dob').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var address = document.getElementById('address').value;
    var maritalStatus = document.getElementById('marital-status').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    let alertTriggered = false;

    if (name == '' || dob == '' || number == '' || email == '' || address == '' || password == '' || confirmPassword == '' || gender == null) {
        alert("Please fill all the fields");
        alertTriggered = true;
    }

    let nameRegx = /^[a-zA-Z]+$/;
    if (!nameRegx.test(name) && !alertTriggered) {
        alert("Please enter only alphabets for name");
        alertTriggered = true;
    }

    let dobRegx = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!dobRegx.test(dob) && !alertTriggered) {
        alert(`Enter valid DOB format: DD-MM-YYYY or DD/MM/YYYY`);
        alertTriggered = true;
    }

    let numberRegx = /^\d+$/;
    if (!numberRegx.test(number) && !alertTriggered) {
        alert("Please enter numbers only for Mobile Number");
        alertTriggered = true;
    }
    if (number.length !== 10 && !alertTriggered) {
        alert("Number should be 10 digits");
        alertTriggered = true;
    }

    let emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegx.test(email) && !alertTriggered) {
        alert("Enter a valid email");
        alertTriggered = true;
    }

    let passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{5,10}$/;
    if (!passwordRegx.test(password) && !alertTriggered) {
        alert(`Password should contain:
At least one lowercase alphabet i.e. [a-z]
At least one uppercase alphabet i.e. [A-Z]
At least one numeric digit i.e. [0-9]
At least one special character i.e. ['@', '$', '.', '#', '!', '%', '*', '?', '&', '^']
Also, the total length must be in the range [5-10]`);
        alertTriggered = true;
    }

    if (password !== confirmPassword && !alertTriggered) {
        alert("Your password and confirmation password do not match");
        alertTriggered = true;
    }

    if (!alertTriggered) {
        var person = new Person(name, dob, number, email, gender.value, address, maritalStatus, password);
        console.log("Person object:", person);

        sessionStorage.setItem('person', JSON.stringify(person));
        alert("Validation Successfull");
        window.location.href = 'personalData.html';
    }

    return !alertTriggered;
}

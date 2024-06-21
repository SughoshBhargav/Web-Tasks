let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');


let string = "";
let arr = Array.from(buttons);
var letters = /^[A-Za-z]+$/;
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                input.value = string;
                console.log("inside =");
            }
            else if (e.target.innerHTML == 'AC') {
                string = "";
                input.value = string;
                console.log("inside AC");
            }
            else if (e.target.innerHTML == 'DEL') {
                string = string.substring(0, string.length - 1);
                input.value = string;
                console.log("inside DEL");
            }
            else {
                console.log("inside else");
                string += e.target.innerHTML;
                input.value = string;
                console.log(string);
            }
        } catch (error) {
            alert('An error occurred: ' + error.message);
            string = ""; 
            input.value = string;
        }
    });
});


function checkLetters(input) {
    var alphaRegx = /[^0-9+\-*/().]/g
    input.value = input.value.replace(alphaRegx, "");
}

input.addEventListener('keydown', (e) => {

    console.log(input.value);
    if (!validate(input.value)) {
        alert("Invalid Input");
        input.value = "";
    }
        //console.log(e.target.innerHTML);
        if (e.key == 'Enter') {

            console.log(string + "   " + string.value)
            string = eval(string);
            input.value = string;
        }
        else if (e.key == 'Escape') {
            string = "";
            input.value = string
        }
        else if (e.key == 'Backspace') {
            string = string.substring(0, string.length - 1);
            //console.log(string);
            input.value = string;
        }
        else {
            string += e.key;
            //console.log(string);
            //input.value = string;
        }

});

$(document).ready(function () {

    $('#input-el').click(function (event) {
        event.preventDefault();
        let name = $("input[name=name]").val();
        let comment = $("textarea").val();
        let city = $("#city").val();
        alert(`${name} from ${city} says ${comment}`);
    });

    $('#insert-el').click(function (event) {
        event.preventDefault();
        let optionValue = $("input[name=name]").val();
        if (optionValue == "" || optionValue == " ") {
            alert("Empty value cannot be appended");
        } else {
            let optionHTML = `
            <option value="${optionValue}"> 
                ${optionValue} 
            </option>`;

            $('#city').append(optionHTML);
        }
    });


});
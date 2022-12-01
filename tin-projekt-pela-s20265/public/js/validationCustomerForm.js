/*global resetErrors,checkRequired,checkTextLengthRange, checkPhoneNo*/

function validateForm() {
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneNoInput = document.getElementById('phoneNo');
    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorPhoneNo = document.getElementById('errorPhoneNo');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors(
        [firstNameInput, lastNameInput, phoneNoInput],
        [errorFirstName, errorLastName, errorPhoneNo],
        errorsSummary
    );

    let valid = true;

    if (!checkRequired(firstNameInput.value)) {
        valid = false;
        firstNameInput.classList.add('error-input');
        errorFirstName.innerText = 'Imię jest wymagane';
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 20)) {
        valid = false;
        firstNameInput.classList.add('error-input');
        errorFirstName.innerText = 'Imię powinno mieć od 2 do 20 znaków';
    }

    if (!checkRequired(lastNameInput.value)) {
        valid = false;
        lastNameInput.classList.add('error-input');
        errorLastName.innerText = 'Nazwisko jest wymagane';
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 40)) {
        valid = false;
        lastNameInput.classList.add('error-input');
        errorLastName.innerText = 'Nazwisko powinno mieć od 2 do 40 znaków';
    }

    if (!checkRequired(phoneNoInput.value)) {
        valid = false;
        phoneNoInput.classList.add('error-input');
        errorPhoneNo.innerText = 'Numer telefonu jest wymagany';
    } else if (!checkPhoneNo(phoneNoInput.value)) {
        valid = false;
        phoneNoInput.classList.add('error-input');
        errorPhoneNo.innerText = 'Numer telefonu powienien składać się z dokładnie 9 cyfr';
    }

    if (!valid) {
        errorsSummary.innerText = 'Formularz zawiera błędy';
    }
    return valid;
}

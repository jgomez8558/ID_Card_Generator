// Jon Gomez  6/17/18

function idCard() {

    // Sets values from index to variables in javascript.
    let firstName = document.getElementById("firstName").value;

    let lastName = document.getElementById("lastName").value;

    let fullName = firstName + " " + lastName;


    let address = document.getElementById("address").value;

    let age = parseInt(document.getElementById("age").value);

    let phoneNumber = parseInt(document.getElementById("phoneNumber").value);

    // Sending values back to HTML.
    document.getElementById("postFullName").innerHTML = fullName;

    document.getElementById("postAddress").innerHTML = address;

    // Checking for age and phone number to be place in array else
    // place 0 or empty string in it's place.
    if (age >= 100) {

        age = 0;

    } else if (phoneNumber <= 100) {

        phoneNumber = 0;

    }

    // Array gets & hold age and phone number.
    let numberArray = [];

    numberArray.push(age);
    numberArray.push(phoneNumber);

    // Checks to see if data is correct to display.
    for(let i = 0; i < numberArray.length; i++) {

        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age:   " + numberArray[i];
        } else if (numberArray[i] >= 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number:   " + numberArray[i];
        } else {
            document.getElementById("postAge").innerHTML = " ";
            document.getElementById("postPhoneNumber").innerHTML = " ";
        }
    }
}

// Calls function.
idCard();

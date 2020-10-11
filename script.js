//create variable for the different values that will be used in the password
var low = 'abcdefghijklmnopqrstuvwxyz';
var cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#£#?><;:$%^&*=-_';

//Link values in document to javascript
var nocBox = document.getElementById("length");
var lowBox = document.getElementById("lowercase");
var capBox = document.getElementById("uppercase");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("symbols");
var generate = document.getElementById("generate");
var passwordText = document.getElementById("password");

//Create some setting so they can be changed in one place
var settings = {
	'passwordMinLength': 8,
	'passwordMaxLength': 128,
	'minAmountOfCheckboxes': 1
}

//prevent the user from putting in a number below 8 or above 128

nocBox.addEventListener("keyup", function (e) {
	
	switch(true){
		case isNaN(parseFloat(nocBox.value)):
			
			//password length is not a number
			
			nocBox.value = settings.passwordMinLength; //this sets the value back to the min
			confirm("Please enter a valid number above 8 or below 128.");
			
		break;
		
		case nocBox.value < settings.passwordMinLength:
			
			//password length to short
			
			nocBox.value = settings.passwordMinLength; //this sets the value back to the min
			confirm("Please enter a number greater than or equal to " + settings.passwordMinLength + ".");
			
		break;
		
		case nocBox.value > settings.passwordMaxLength:
			
			//password length to long
			
			nocBox.value = settings.passwordMaxLength; //this sets the value back to the max			
			confirm("Please enter a number less than or equal to " + settings.passwordMaxLength + ".");
			
		break;
		
	}
	
	return false;
	
});

// make sure the button is working and is linked to the values that are defined in the variables
// also make sure the check box feature is working so each value can be selected as and when required

generate.addEventListener("click", function (e) {

    var characters = "",
		checked = 0,
		checkboxes = document.querySelectorAll('form')[0].querySelectorAll('input[type="checkbox"]');
		
	// loop through all the checkboxes in the form and count how many are checked
		
	for (var i = 0; i < checkboxes.length; i++) {
		if(checkboxes[i].checked){
			checked++;
		}
	}
	
	// prevent user from not seleting min amount of checkbox
	
	if(checked >= settings.minAmountOfCheckboxes){
			
		(numBox.checked) ? characters += num : '';
		(symBox.checked) ? characters += sym : '';
		(lowBox.checked) ? characters += low : '';
		(capBox.checked) ? characters += cap : '';
		
		passwordText.value = password(nocBox.value, characters);
		
	}
	else{
		
		confirm("Please select at least " + settings.minAmountOfCheckboxes + " checkbox" + (settings.minAmountOfCheckboxes > 1 ? 's' : '') + ".");
		
	}
	
	return false;

});


//console.log(password);
// I created a function where by the user can select the number of characters required 
//and select which values they would like in their password I then created a for loop adding a math.
//random attribute where by the computer would generate a random password each time 
//the user clicked the generate button even if they changed the values.

function password(lgt, characters) {
    var pword = '';
    for (var i = 0; i < lgt; i++) {
        pword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pword;
}



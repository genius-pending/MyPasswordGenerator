//create variable for the different values that will be used in the password
var low = 'abcdefghijklmnopqrstuvwxyz';
var cap ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#£#?><;:$%^&*=-_';


//Link values in document to javascript
var noc = document.getElementById("length");
var lowBox = document.getElementById("lowercase");
var capBox = document.getElementById("uppercase");
var numBox = document.getElementById("numbers");
var symBox = document.getElementById("symbols");
var generate = document.getElementById("generate");
var passwordText = document.getElementById("password");


// make sure the button is working and is linked to the values that are defined in the variables
// also make sure the check box feature is working so each value can be selected as and when required

generate.addEventListener("click",function(e){
    var characters = "";
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    (lowBox.checked) ? characters += low : '';
    (capBox.checked) ? characters += cap : '';
    passwordText.value = password(noc.value,characters);
});

//console.log(password);
// I created a function where by the user can select the number of characters required 
//and select which values they would like in their password I then created a for loop adding a math.
//random attribute where by the computer would generate a random password each time 
//the user clicked the generate button even if they changed the values.

function password(lgt,characters){
  var pword = '';
  for(var i = 0; i<lgt; i++){
      pword += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pword;
}



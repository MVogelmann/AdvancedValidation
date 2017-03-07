function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if (userEntered.length >= 6) {  //If username OK
    //Turn the username items green
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");
    //Hide the error message
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameError").classList.add("hidden-message");
  }
  else {                         //Username too short!
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

  if (passEntered == "password") {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    //Turn the password items green
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
    //Hide messages
    document.getElementById("passwordError").classList.remove("shown-message");
    document.getElementById("passwordError").classList.add("hidden-message");
  }
}

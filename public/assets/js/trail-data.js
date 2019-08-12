$("#submit-btn").on("click", function(event) {
    // event.preventDefault();
   // pulls info from "Sign Up" form
    var userName = $("#userName").val() //works
    var email = $("#emailInput").val(); //undefined
    var password = $("#Password").val(); //undefined
    var confirmPassword = $("#confirmPassword").val(); //works
    var firstName = $("#FirstName").val(); //undefined
    var lastName = $("#LastName").val(); //undefined

   
    // console.log(userName);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);
    // console.log(firstName);
    // console.log(lastName);
    

    //check to make sure password and confirmPassword are identical
    if (password !== confirmPassword) {
        alert("Check to make sure your passwords match!");
    } else {
        //stores above info in an object to send to backend
        var newUser = {
            userName : userName,
            email : email,
            password: password,
            firstName: firstName,
            lastName: lastName
        };
        console.log(newUser);
    }

    
});




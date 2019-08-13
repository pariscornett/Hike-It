//listens for a click on the "sign up" form
$("#submit-btn").on("click", function(event) {
    // event.preventDefault();
    //pulls data from form boxes
    var userName = $("#userName").val() 
    var email = $("#emailInput").val(); 
    var password = $("#Password").val(); 
    var confirmPassword = $("#confirmPassword").val(); 
    var firstName = $("#FirstName").val(); 
    var lastName = $("#LastName").val(); 

    //check to make sure password and confirmPassword are identical
    if (password !== confirmPassword) {
        alert("Check to make sure your passwords match!");
        return;
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

        //sends object to endpoint for backend to retrieve
        $.ajax("/signup", {
            type: "POST", 
            data: newUser
        }).then (
            function(response) {
                //should recieve a response of success, if it works
                console.log(response);
            }
        );
    };
});




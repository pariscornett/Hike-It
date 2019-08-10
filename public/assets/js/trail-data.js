$(function() {
    $(".form-group").on("submit", function() {
        //pulls info from "Sign Up" form
        var userName = $("#userName").val().trim();
        var email = $("#email").val().trim();
        var password = $("#InputPassword").val().trim();
        var confirmPassword = $("#confirmPassword").val().trim();
        var firstName = $("#inputFirstName").val().trim();
        var lastName = $("#inputLastName").val().trim();

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

       
    })
})
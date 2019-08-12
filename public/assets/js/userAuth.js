// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    
    $(document).on("click","#signupBtn",function(event){  
     
        event.preventDefault();
        console.log("btn on click");
        //pulls info from "Sign Up" form
        var userName = $("#userName").val().trim();
        var email = $("#emailInput").val().trim();
        var password = $("#Password").val().trim();
        var confirmPassword = $("#confirmPassword").val().trim();
        var firstName = $("#FirstName").val().trim();
        var lastName = $("#LastName").val().trim();

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
            $.post("/signup",newUser,function(data){

                console.log("return data",data);
                window.location.href = "/dashboard"
                
            });
        }       
    });
})
    
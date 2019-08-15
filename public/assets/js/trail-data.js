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

//listens for click on "Dashboard-Search" trail
$("#search").on("click", function(event) {
    //pulls city from search box
    var city = req.params.city;

    $.ajax("/trails/:city", {
        type: "GET",
        data: req.params.city
    }).then (
        function(response) {
            //should receive an object with trail info as a response
            console.log(response); 
        }
    );
});


//listens for click on submit button for the "log in" form
$(".btn-primary").on("click", function (event) {
    //the variable userName can contain either the username OR email address   
   var userName = $("#userName").val().trim();
   var password = $("Password").val().trim();

   //store this information in an object to send to the backend team

   var loginInfo = {
       userName: userName,
       password: password
   };

   $.ajax("/login", {
       method: "POST",
       data: loginInfo
   }).then(
       function(response) {
           console.log(response);
       }
   )
})


//listens for a click on the "sign up" form
$("#submit-btn").on("click", function (event) {
    event.preventDefault();
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
            userName: userName,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        };

        //sends object to endpoint for backend to retrieve
        $.ajax("/signup", {
            type: "POST",
            data: newUser
        }).then(
            function (response) {
                //should recieve a response of success, if it works
                console.log(response);
                //redirect to dashboard-search page
                window.location.href = "/dashboard-search"
            }
        );
    };
});

//listens for click on "Dashboard-Search" trail
$("#search").on("click", function (event) {
    event.preventDefault();
    var userCityInput = $('#trailSearch').val().trim()
    $.ajax({
        method: "GET",
        url: "/trails/" + userCityInput
    }).then(function (trails) {
        console.log(trails);
        $("#found-trails").empty();

        if (trails.length < 1) {
            $("#found-trails").append("No trails found for this city.")
        }

        for (var i = 0; i < trails.length; i++) {
            $("#found-trails").append(
                "<tr>" +
                "<td>" + trails[i].trailName + "</td>" +
                "<td>" + trails[i].trailAddress + "</td>" +
                "<td>" + trails[i].trailCity + "</td>" +
                "<td>" + trails[i].trailState + "</td>" +
                "<td>" + trails[i].trailDifficulty + "</td>" +
                "<td>" + trails[i].trailLength + "</td>" +
                "</tr>"

            );
        }
    })
});

//opens up existing user login form
$("#existing-user-login").on("click", function (event) {
    event.preventDefault();

    $.ajax("/prelogin", {
        method: "GET",

    })
    window.location.href = "/log-in"
});

//listens for click on submit button for the "log in" form
$("#login-existing-user").on("click", function (event) {

    event.preventDefault();
    console.log("here");
    //the variable userName can contain either the username OR email address   
    var userName = $("#userName").val().trim();
    var password = $("#password").val().trim();

    //store this information in an object to send to the backend team

    var loginInfo = {
        userName: userName,
        password: password
    };
    console.log(loginInfo);

    $.ajax("/login", {
        method: "POST",
        data: loginInfo
    }).then(
        function (response) {
            console.log(response);
        }
    ).catch(function (err) {
        console.log(err);
    })
});

//on.click function to add a trail
$("#submit-new-trail").on("click", function (event) {
    // alert("You clicked this button!");
    event.preventDefault();
    //store info from forms into variables

    

    var trailData = {
        trailName: $("#trailNameInput").val().trim(),
        trailAddress: $("#trailAddress").val().trim(),
        trailCity: $("#trailCity").val().trim(),
        trailState: $("#trailState").val().trim(),
        trailLength: $("#trailLength").val().trim(),
        trailDifficulty: $("#difficultyRating").val().trim()
    }
    console.log(trailData);
    $.ajax({
        method: "POST",
        url: "/trails/add",
        data: trailData
    }).then(function (res) {
        console.log(res);
        $("#trailNameInput").val('');
        $("#trailAddress").val('');
        $("#trailCity").val('');
        $("#trailState").val('');
        $("#trailLength").val('');
        $("#difficultyRating").val('');
        alert("Trail successfully added!");
    }).catch(function (err) {
        console.log(err);
    })

    // var newTrail = {
    //     trailName: trailName,
    //     trailAddress: trailAddress,
    //     trailCity: trailCity,
    //     trailState: trailState,
    //     trailLength: trailLength,
    //     trailDifficulty: trailDifficulty
    // };

    // console.log(newTrail);
});

//log out user
$("#user-logout").on("click", function (event) {
    event.preventDefault();
    window.location.href = "/"
});


//click event to show user profile
$("#user-profile").on("click", function (event) {
    event.preventDefault();
    window.location.href = "/profile"
});

//click event to redirect to dashboard-search when the "search" button on navbar is clicked
$("#user-search").on("click", function (event) {
    event.preventDefault();
    window.location.href = "/dashboard-search"
});
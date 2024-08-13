let user = document.getElementById("user1");


user.addEventListener("click", function () {
    document.querySelector(".loginPage").classList.toggle("active1");
})

// user login 
let loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", function () {
let email = document.getElementById("mail");
    let pass = document.getElementById("pass");

    if (email.value == "") {
        alert("Please Fill Details");
    }
    else if (pass.value == "") {
        alert("Please Fill Details");
        
    }
    else {
        alert("You Logged In")
        document.querySelector(".loginPage").style.display="none"
    }
    
})

//book tour 

let placename = document.getElementById("placename");
let Member = document.getElementById("Member");
let date = document.getElementById("date");
let date1 = document.getElementById("date1");

let submit = document.getElementById("submit");


submit.addEventListener("click", function () {
    if (placename.value == "") {
        alert("Fill form");
    }
    else if (Member.value == "") {
        alert("Fill Form")
    }
    else if (date.value == "") {
        alert("Fill Form")
    }
    else if (date1.value == "") {
        alert("Fill Form")
    }
    else {
        alert(placename.value + " " + "tour booked")
    
        
    }
    placename.value = "";
    Member.value = "";
    date.value = "";
    date1.value = "";
})

// contact us

let Name=document.getElementById("name")
let mail2=document.getElementById("mail2")
let connect = document.getElementById("connect")

connect.addEventListener("click", function () {
    if (Name.value == "") {
        alert("fill Form")
        
    }
    else if (mail2.value == "") {
        alert("Fill Form")
    }
    else {
        alert("You Logged In")
    }
    Name.value = "";
    mail2.value = "";
})
var btnsSignin = document.querySelector("#signin");
var btnsSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnsSignin.addEventListener("click", function () {
    body.className ="sign-in-js";
});
btnsSignup.addEventListener("click", function () {
    body.className ="sign-up-js";
});
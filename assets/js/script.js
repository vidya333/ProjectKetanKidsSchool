// Registration Form Password Show / Hide
var checker = document.getElementById("checkme");
var pass = document.getElementById("pass");
function typeChecker() {
    if (checker.checked){
        pass.setAttribute("type","text");
    }
    else{
        pass.setAttribute("type","password");
    }
}
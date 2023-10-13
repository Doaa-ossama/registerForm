/*....................styling.....................*/
function ChangeSpanStyle(Element, Display, text, Color) {
    
    Element.style.display = Display;
    Element.textContent = text;
    Element.style.color = Color;
}
function ChangeElementStyle(Element, Color) {
    
    Element.style.outline = "none";
    Element.style.border = "3px solid " + Color;
}
/*...................CheckFileSize.......................*/
var submitFileSize=""
function CheckFileSize(file) {
    
    var FileSize = file.files[0].size
    FileSize = FileSize / 1024 / 1024;   // size in MB
    var FileErr = document.getElementById('FileErr');
    var ele=document.getElementById("FileUploader")
    if (FileSize < 2 && FileSize > 0) {
        // ChangeElementStyle(ele, "green")
        ele.style.color="green"
        FileErr.style.display = "inline";
        FileErr.textContent = "Allowed Size";
        FileErr.style.color = "green";
        submitFileSize=true;
    }
    else {
        // ChangeElementStyle(ele, "red")
        ele.style.color="red"
        FileErr.style.display = "inline";
        FileErr.textContent = "Not Allowed"
        FileErr.style.color = "red";
        submitFileSize=false;
    }
}
/*....................CheckPassword........................*/
var submitPassword=""

var strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
var mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
function CheckPassword(passElement) {
    
    //var PassMsg = document.getElementById('StrengthDisp');
    var pass = passElement.value;
    if (pass != "" ||pass!="undefined"){
        if (strongPassword.test(pass)) {
            //ChangeSpanStyle(PassMsg, "inline", "strong", "green")
            ChangeElementStyle(passElement, "green")
            submitPassword=true;
        }
        else if (mediumPassword.test(pass)) {
            //ChangeSpanStyle(PassMsg, "inline", "Medium", "Orange")
            ChangeElementStyle(passElement, "Orange")
            submitPassword=true;
        }
        else {
            //ChangeSpanStyle(PassMsg, "inline", "Weak", "red")
            ChangeElementStyle(passElement, "red")
            submitPassword=false;
        }
    }
}

/*....................CheckName........................*/
var submitName=""
function CheckName(nameElement){
    var name = nameElement.value;
    if(name!= ""){
        submitName = true;
    }
    else{
        submitName = false;
    }
}
/*....................CheckEmail........................*/
var submitEmail=""
var emailValid = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
function CheckEmail(emailElement){
    
    var email = emailElement.value;
    if (email != ""){
        if(emailValid.test(email)){
            ChangeElementStyle(emailElement, "green")
            submitEmail =true;
        }
        else {
            ChangeElementStyle(emailElement, "red")
            submitEmail =false;
        }
    }
}
/*......................CheckPhone........................*/
var submitPhone=""
var phoneValid = /^\+?([0-9]{2})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
function CheckPhone(phoneElement){
    var phone = phoneElement.value;
    if (phone != ""){
        if(phoneValid.test(phone)){
            ChangeElementStyle(phoneElement, "green")
            submitPhone= true;
        }
        else {
            ChangeElementStyle(phoneElement, "red")
            submitPhone= false;
        }
    }
}
/*....................CheckCounter........................*/
var submitCount=""
function CheckCounter(countElement){
debugger
    var count = countElement.value;
    if (count != ""){
        if(count>0 && count<=20){
            ChangeElementStyle(countElement, "green")
            submitCount=true;
        }
        // else if(isNaN(count)) {
        //     ChangeElementStyle(countElement, "violet")
        // }
        else{
            ChangeElementStyle(countElement, "red")
            submitCount=false;
        }
    }
}
/*......................submitValidation........................*/
// function submitValid () {
// var submitButt = document.getElementById('submitBt');
// if (submitCount==false || submitPhone==false || submitEmail==false || submitName==false || submitPassword==false || submitFileSize==false){
// submitButt.addEventListener('click', function(event) {
//     event.target.disabled = true;
// });}
// }
function submitValid () {
    
if (submitCount==false||submitPhone==false||submitEmail==false||submitName==false||submitPassword==false||submitFileSize==false){
    event.preventDefault()
    var pageErr = document.getElementById('pageErr');
    pageErr.style.display = "inline";
    pageErr.textContent = "Not Allowed to submit"
    pageErr.style.color = "red";
}
}
/*...............Timer and stopTimer.................*/
var interval=setInterval(clock,1000)
function clock(){
    var d = new Date();
    document.getElementById("clk").innerHTML = d.toLocaleTimeString();
    // d.toLocaleString();
    }
function stopClock () {
    clearInterval(interval)
}

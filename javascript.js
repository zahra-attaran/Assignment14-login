var Formsection = document.getElementById("frm");
var form = document.getElementById("form");
var spouse = document.getElementById("spouse");
var secChild = document.getElementById("secChild");
var children = document.getElementById("children");
var childrenName = document.getElementById("childrenName");
var setDarkMood=document.getElementById('darkMode')
var cheched=document.getElementById('checkboxChild');
function showForm(){
    Formsection.classList.add("showform");
}
function DarkMode(){
    if(setDarkMood.checked == true){
        form.classList.add("darkmod")
        console.log("shode")
    }
    else{
        form.classList.remove("darkmod")
    }
}
function married(){
    spouse.style.display = "block";
    secChild.style.display = "block";
}

function single(){
    spouse.style.display = "none";
    secChild.style.display = "none";
}

function child(){
    if(cheched.checked == true){
        children.style.display = "block";
    }
    else{
        children.style.display = "none";
    }
}
function addChild(){
    var input=document.createElement("INPUT");
    input.type='text';
    input.style.width="100%";
    input.style.height="25px";
    input.style.paddingRight ="0px";
    childrenName.appendChild(input);
}
function deleteChild(){
    childrenName.removeChild(childrenName.childNodes[0]);

}
function UnShow(){

}

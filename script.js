var inputField= document.getElementById("inputField");
var list = document.getElementById("list");

function Add(){
    var item = document.createElement("li");
    list.appendChild(item);
    item.innerHTML=inputField.value;
    inputField.value="";

}

function Remove(){
    list.removeChild(list.firstElementChild)
}
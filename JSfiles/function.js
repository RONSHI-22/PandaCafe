const checkbox = document.getElementById("agreeBox");
const rulesBox = document.getElementById("rulesBox");

checkbox.addEventListener("change", function(){

    if(checkbox.checked){
        rulesBox.classList.add("show");
    }
    else{
        rulesBox.classList.remove("show");
    }

});
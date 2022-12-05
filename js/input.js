
var input = document.getElementById("input");

input.onfocus = function() {
    "use strict";
    if(this.placeholder == "Ваш телефон") {
        this.value = '+7 (___) _ -  - __';
    }
};

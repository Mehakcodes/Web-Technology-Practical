const button = document.getElementById("btn");
const disp=document.getElementById("display_text");
const inp=document.getElementById("input_int");

button.addEventListener("click", myFunction);

function myFunction() {
    var  x = parseInt(inp.value);
    if(isNaN(x)) disp.innerHTML = "Please enter a number";
    if(x%2) disp.innerHTML = "The number is odd";
    else disp.innerHTML = "The number is even";
}

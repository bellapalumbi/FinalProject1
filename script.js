var myDiv1 = document.getElementById("div1");
var myDiv2 = document.getElementById("div2");
var myDiv3 = document.getElementById("div3");
var myMainText = document.getElementById("textDiv");

var mainFunction() {
    var myColor = prompt("Please input your favorite color.");
    
    myDiv1.style.borderColor = myColor;
    myDiv2.style.borderColor = myColor;
    myDiv3.style.borderColor = myColor;

    myMainText.style.color = myColor;
    myMainText.style.borderTopColor = 'black';
    myMainText.style.borderLeftColor = 'black';
    myMainText.style.borderRightColor = 'black';
}

if (myDiv1.style.borderColor == false) {
    alert("The color you inputed was not valid. Refresh the page.")
}


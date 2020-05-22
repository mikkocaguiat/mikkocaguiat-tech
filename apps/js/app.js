var inputSMD = document.getElementById("SMD");
inputSMD.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btnSMD").click();
  }
});



function result_4band(){
    var mult, resDisplay, res;
    var firstband4b, secondband4b, multiplier4b, tolerance4b;

    firstband4b = document.getElementById("firstband4b").value;

    secondband4b = document.getElementById("secondband4b").value;

    multiplier4b = document.getElementById("multiplier4b").value;

    tolerance4b = document.getElementById("tolerance4b").value;

    res = ((firstband4b + secondband4b) * multiplier4b);

    if (res >= 1e9) {
        res /= 1e9;
        mult = "G";
    } else if (res >= 1e6) {
        res /= 1e6;
        mult = "M";
    } else if (res >= 1e3) {
        res /= 1e3;
        mult = "k";
    } else {
        mult = " ";
    }

    resDisplay = res + mult + " Ω";
    resDisplay += " " + tolerance4b;

    document.getElementById("ohmvalue4").value=resDisplay;
}

function result_5band(){
    var mult, resDisplay, res;
    var firstband5b, secondband5b, thirdband5b, multiplier5b, tolerance5b;

    firstband5b = document.getElementById("firstband5b").value;

    secondband5b = document.getElementById("secondband5b").value;

    thirdband5b = document.getElementById("thirdband5b").value;

    multiplier5b = document.getElementById("multiplier5b").value;

    tolerance5b = document.getElementById("tolerance5b").value;

    res = ((firstband5b + secondband5b + thirdband5b) * multiplier5b);

    if (res >= 1e9) {
        res /= 1e9;
        mult = "G";
    } else if (res >= 1e6) {
        res /= 1e6;
        mult = "M";
    } else if (res >= 1e3) {
        res /= 1e3;
        mult = "k";
    } else {
        mult = " ";
    }

    resDisplay = res + mult + " Ω";
    resDisplay += " " + tolerance5b;

    document.getElementById("ohmvalue5").value=resDisplay;
}
function result_6band(){
    var mult, resDisplay, res;
    var firstband6b, secondband6b, thirdband6b, multiplier6b, tolerance6b, ppm6b;

    firstband6b = document.getElementById("firstband6b").value;

    secondband6b = document.getElementById("secondband6b").value;

    thirdband6b = document.getElementById("thirdband6b").value;

    multiplier6b = document.getElementById("multiplier6b").value;

    tolerance6b = document.getElementById("tolerance6b").value;

    ppm6b = document.getElementById("ppm6b").value;

    res = ((firstband6b + secondband6b + thirdband6b) * multiplier6b);

    if (res >= 1e9) {
        res /= 1e9;
        mult = "G";
    } else if (res >= 1e6) {
        res /= 1e6;
        mult = "M";
    } else if (res >= 1e3) {
        res /= 1e3;
        mult = "k";
    } else {
        mult = " ";
    }

    resDisplay = res + mult + " Ω";
    resDisplay += " " + tolerance6b + " " + ppm6b + "ppm/K";

    document.getElementById("ohmvalue6").value=resDisplay;
}

function result_SMD(){
    var code = document.getElementById("SMD").value;
    var n = code.length;
    var r = code.includes("R") || code.includes("r");

    if (n==4){
        if (r==true){
            n = "It has R";
        }
        else{
            n = "No R";
        }
    }

    else if (n==3){
        n = "Three Code SMD";
    }
    else{
        n = "Error | Unknown SMD Code";
    }
    document.getElementById("ohmvalueSMD").value=n;
}


function copy4b() {
    /* Get the text field */
    var copyText = document.getElementById("ohmvalue4");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}
function copy5b() {
    /* Get the text field */
    var copyText = document.getElementById("ohmvalue5");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}

function copy6b() {
    /* Get the text field */
    var copyText = document.getElementById("ohmvalue6");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}

function copySMD() {
    /* Get the text field */
    var copyText = document.getElementById("ohmvalueSMD");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
}
/**
 * Created by sam on 9/14/2015.
 */

function getClasses(elem) {
    var aString = elem;
    //var aString = 'p>dfddff ef aas dfgw ae# $@ 5<>class="foo bar bazz bizz"<<';
    var myReG = /class="([\w\s+]*)"/g;
    var anArray = myReG.exec(aString);

    var classArray = anArray[1].split(" ");
    //document.getElementById("demo5").innerHTML = classArray;
    return classArray;
}

function addClass(elem, className) {
    var double = false;
    var aString = 'p>dfddff ef aas dfgw ae# $@ 5<>class="foo bar bazz bizz"<<';
    var myReg = /class="([\w\s+]*)"/g;
    var anArray = myReg.exec(aString);

    var classArray = anArray[1].split(" ");

    for(i = 0; i < classArray.length; i++) {
        if(classArray[i] == className) {
            double = true;
        }
    }
    if(double === false) {
        classArray.push(className);
    }
    return classArray;
}

function validateForm() {
    var correct = true;
    var same = true;
    var errorMessage = "Please enter: ";
    var errorMessage2 = " *PASSWORDS DO NOT MATCH* ";
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        //alert("Name must be filled out");
        document.getElementById('username').style.backgroundColor = "pink";
        correct = false;
        errorMessage = errorMessage + 'USERNAME ';
    }
    var y = document.forms["myForm"]["address"].value;
    if (y == null || y == "") {
        document.getElementById('address').style.backgroundColor = "pink";
        correct = false;
        errorMessage = errorMessage + 'EMAIL ';
    }
    var z = document.forms["myForm"]["pass"].value;
    if (z == null || z == "") {
        document.getElementById('pass').style.backgroundColor = "pink";
        correct = false;
        errorMessage = errorMessage + 'PASSWORD ';
    }
    var q = document.forms["myForm"]["confirm"].value;
    if (q == null || q == "") {
        document.getElementById('confirm').style.backgroundColor = "pink";
        correct = false;
        errorMessage = errorMessage + 'PASSWORDCONFIRM ';
    }
    if(z != q) {
        document.getElementById('pass').style.backgroundColor = "pink";
        document.getElementById('confirm').style.backgroundColor = "pink";
        same = false;
    }
    if(correct == false) {
        document.getElementById('error').style.backgroundColor = "pink";
        document.getElementById('error').innerHTML = errorMessage;
    }
    if(same == false) {
        document.getElementById('error').style.backgroundColor = "pink";
        document.getElementById('error').innerHTML = errorMessage2;
    }
    var ret = correct && same;
    return ret;
}

window.onload = function () {
    var urlString = document.URL;
    console.log(location.search);

    var myRe = /=([\w\d\+]*).*=([\w\d\+%\.]*).*=([\w\d\+]*).*=([\w\d\+]*)/g;
    //var myRe = /(http)/g;
    var myArray = myRe.exec(urlString);

    var uName = myArray[1].replace(/\+/g,' ');
    var uEmail = myArray[2].replace(/%40/g,'@');
    var uPass = myArray[3].replace(/\+/g,' ');
    var uPassCon = myArray[4].replace(/\+/g,' ');

    document.getElementById("demo1").innerHTML = urlString;
    document.getElementById("demo2").innerHTML = "User name:" + uName;
    document.getElementById("demo3").innerHTML ="Email:" + uEmail;
    document.getElementById("demo4").innerHTML ="Password:" +  uPass;
    document.getElementById("demo5").innerHTML ="Password Confirm:" +  uPassCon;
    return;
}
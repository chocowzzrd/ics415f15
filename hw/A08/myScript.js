/**
 * Created by sam on 9/28/2015.
 */
var one = false;
var two = false;
var three = false;
var four = false;
var five = false;

$(document).ready(function(){
    $("#first").click(function() {
        if (one == false) {
            $.get("info.txt", function (data) {
                var textStr = data.split("\n");
                $('#demo1').append("", textStr[0])
                $('#first').empty();
                $('#first').append("", "(-) What color is the sky?");
                one = true;
            });
        }
        if (one = true) {
            $('#first').empty();
            $('#first').append("", "(+) What color is the sky?");
            $('#demo1').empty();
            one = false;
        }
    });
});

$(document).ready(function(){
    $("#second").click(function() {
        if (two == false) {
            $.get("info.txt", function (data) {
                var textStr = data.split("\n");
                $('#demo2').append("", textStr[1])
                $('#second').empty();
                $('#second').append("", "(-) What time does evening change to night?");
                two = true;
            });
        }
        if (two = true) {
            $('#second').empty();
            $('#second').append("", "(+) What time does evening change to night?");
            $('#demo2').empty();
            two = false;
        }
    });
});

$(document).ready(function(){
    $("#third").click(function() {
        if (three == false) {
            $.get("info.txt", function (data) {
                var textStr = data.split("\n");
                $('#demo3').append("", textStr[2])
                $('#third').empty();
                $('#third').append("", "(-) Where can I go to catch the bus?");
                three = true;
            });
        }
        if (three = true) {
            $('#third').empty();
            $('#third').append("", "(+) Where can I go to catch the bus?");
            $('#demo3').empty();
            three = false;
        }
    });
});

$(document).ready(function(){
    $("#forth").click(function() {
        if (four == false) {
            $.get("info.txt", function (data) {
                var textStr = data.split("\n");
                $('#demo4').append("", textStr[3])
                $('#forth').empty();
                $('#forth').append("", "(-) Finish him.");
                four = true;
            });
        }
        if (four = true) {
            $('#forth').empty();
            $('#forth').append("", "(+) Finish him.");
            $('#demo4').empty();
            four = false;
        }
    });
});

$(document).ready(function(){
    $("#fifth").click(function() {
        if (five == false) {
            $.get("info.txt", function (data) {
                var textStr = data.split("\n");
                $('#demo5').append("", textStr[4])
                $('#fifth').empty();
                $('#fifth').append("", "(-) Got to catch them all.");
                five = true;
            });
        }
        if (five = true) {
            $('#fifth').empty();
            $('#fifth').append("", "(+) Got to catch them all.");
            $('#demo5').empty();
            five = false;
        }
    });
});
/*
function validateForm() {
    var urlString = document.forms["myForm"]["url"].value;
   // alert( "Data Loaded: " + urlString );
    document.getElementById("info").innerHTML = "something";
    document.getElementById('col2').style.backgroundColor = "pink";
    $('#info').append("", urlString);
}*/

$(document).ready(function(){
    $("#submit").click(function() {
        var urlString = document.forms["myForm"]["url"].value;
        //var string = urlString.toString();
        $('#info').append("", urlString)
        alert( "Data Loaded: " + urlString );
        //document.getElementById('col2').style.backgroundColor = "pink";
    });
});
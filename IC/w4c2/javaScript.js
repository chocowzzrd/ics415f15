/**
 * Created by sam on 9/16/2015.
 */

function getData() {
    var x = document.getElementsByName("myForm")
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}

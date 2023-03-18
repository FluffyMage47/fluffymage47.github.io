function increaseTextSize() {
    alert("Text size changed!");
    document.getElementById("mainText").style.fontSize = "25px";
}

function changeStyle() {
    alert("Text style changed!");
    if(document.getElementById("fancy").checked) {
        document.getElementById("mainText").style.fontWeight = "bold";
        document.getElementById("mainText").style.textDecoration = "blue underline";
    }
    else if(document.getElementById("notFancy").checked) {
        document.getElementById("mainText").style.fontWeight = "normal";
        document.getElementById("mainText").style.textDecoration = "none";
    }
}

function Moo() {
    alert("Moo");

    let uppercaseValue = document.getElementById("mainText").value.toUpperCase();
    document.getElementById("mainText").value = uppercaseValue;

    let sentences = document.getElementById("mainText").value.split(".");

    document.getElementById("mainText").value = sentences.join("Moo");

}



var colors = [
    "silver",
    "lightblue",
    "lightgreen",
    "coral",
    "lavender",
    "bisque",
    "azure",
    "beige",
    "cadetblue",
    "tan"
];

setInterval(() => {
    let body = document.getElementsByClassName("colorful")[0];
    let randomNumber = parseInt(Math.random() * 10);
    body.style.backgroundColor = colors[randomNumber];
}, 1000);

function welcome() {
    alert("Welcome!");
}

function changeText() {
    let p = document.getElementById("changeText");
    p.setAttribute("class", "changedText");
    p.innerHTML = "Text has changed!";
}

function changeImg() {
    let img = document.getElementById("img");
    img.src = "images/do.jpg";
}

function testRadio() {
    var radio = document.getElementsByName("gender");
    let textLabel = document.getElementById("span1");
    for (let i = 0; i < radio.length; i++) {
        if (document.getElementById("Male").checked) {
            textLabel.innerHTML = "Selected Gender: Male";
        }
        else if (document.getElementById("Female").checked) {
            textLabel.innerHTML = "Selected Gender: Female";
        }
        else {
            textLabel.innerHTML = "Error, please choose your gender.";
        }
    }
}

function newlocation() {
    window.location.assign("newpage.html");
}

function oldlocation() {
    window.history.back();
}

function showinput() {
    var input = document.getElementsByClassName("type-input");
    let message = "";
    for(let i = 0; i < input.length; i++){
        message += input[i].value + "<br>";
    }
    let textLabel = document.getElementById("span2");
    textLabel.innerHTML = message;
}
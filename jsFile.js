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
    let inputValue1 = document.getElementById("firstname").value; 
    let inputValue2 = document.getElementById("lastname").value; 
    let inputValue3 = document.getElementById("animal").value; 

    document.getElementById("span2").innerHTML = inputValue1 + "<br>" + inputValue2 + "<br>" + inputValue3;
  }
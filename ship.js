var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

var turnSensitivityStr = localStorage.getItem("turnSensitivity");

if (turnSensitivityStr == null || turnSensitivityStr < 0) {
    var turnSensitivity = 50;
} else {
    var turnSensitivity = parseInt(turnSensitivityStr);
}

var thrustSensitivityStr = localStorage.getItem("thrustSensitivity");

if (thrustSensitivityStr == null || thrustSensitivityStr < 0) {
    var thrustSensitivity = 50;
} else {
    var thrustSensitivity = parseInt(thrustSensitivityStr);
}


slider.value = turnSensitivity
output.innerHTML = turnSensitivity


slider.oninput = function() {
  output.innerHTML = this.value;
  var turnSensitivity = this.value;
  
  localStorage.setItem("turnSensitivity", turnSensitivity)
}

/* Thrut sensitivity */


var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");


slider1.value = thrustSensitivity
output1.innerHTML = thrustSensitivity


slider1.oninput = function() {
  output1.innerHTML = this.value;
  var thrustSensitivity = this.value;
  
  localStorage.setItem("thrustSensitivity", thrustSensitivity)
}




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function drop(){
    document.getElementById("myDropdown").classList.toggle("show");
}

function drop1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}


var colorWell;
var defaultColor = "#ffffff";
var color = "white";

window.addEventListener("load", startup, false);

function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.select();
}

function updateFirst(event) {
    color = event.target.value;
    localStorage.setItem("color", color)
}



// Update with correct chosen color of ship


var colorStr = localStorage.getItem("color")

if (colorStr == null) {
    var color = "white";
} else {
    var color = colorStr
}

function red(){
    $(".dropbtn").text("Color : RED")
    color = "red"
    localStorage.setItem("color", color)
}

function orange(){
    $(".dropbtn").text("Color : ORANGE")
    color = "orange"
    localStorage.setItem("color", color)
}

function yellow(){
    $(".dropbtn").text("Color : YELLOW")
    color = "yellow"
    localStorage.setItem("color", color)
}

function green(){
    $(".dropbtn").text("Color : GREEN")
    color = "green"
    localStorage.setItem("color", color)
}

function blue(){
    $(".dropbtn").text("Color : BLUE")
    color = "blue"
    localStorage.setItem("color", color)
}

function indigo(){
    $(".dropbtn").text("Color : INDIGO")
    color = "indigo"
    localStorage.setItem("color", color)
}

function violet(){
    $(".dropbtn").text("Color : VIOLET")
    color = "violet"
    localStorage.setItem("color", color)
}


/* Laser color */

var colorWell1;
var defaultColor1 = "#ffffff";
var color1 = "white";

window.addEventListener("load", startup1, false);

function startup1() {
    colorWell1 = document.querySelector("#colorWell1");
    colorWell1.value = defaultColor1;
    colorWell1.addEventListener("input", updateFirst1, false);
    colorWell1.select();
}

function updateFirst1(event) {
    color1 = event.target.value;
    $(".circle").style.color = color1
    localStorage.setItem("color1", color1)
}



// Update with correct chosen color of ship


var color1Str = localStorage.getItem("color1")

if (color1Str == null) {
    var color1 = "white";
} else {
    var color1 = color1Str
}

function red(){
    $(".dropbtn").text("Color : RED")
    color = "red"
    localStorage.setItem("color", color)
}

function orange(){
    $(".dropbtn").text("Color : ORANGE")
    color = "orange"
    localStorage.setItem("color", color)
}

function yellow(){
    $(".dropbtn").text("Color : YELLOW")
    color = "yellow"
    localStorage.setItem("color", color)
}

function green(){
    $(".dropbtn").text("Color : GREEN")
    color = "green"
    localStorage.setItem("color", color)
}

function blue(){
    $(".dropbtn").text("Color : BLUE")
    color = "blue"
    localStorage.setItem("color", color)
}

function indigo(){
    $(".dropbtn").text("Color : INDIGO")
    color = "indigo"
    localStorage.setItem("color", color)
}

function violet(){
    $(".dropbtn").text("Color : VIOLET")
    color = "violet"
    localStorage.setItem("color", color)
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}




const FPS = 30; // frames per second
const FRICTION = 0.7; // friction coefficient of space (0 = no friction, 1 = lots of friction)
const SHIP_SIZE = 50; // ship height in pixels
const SHIP_THRUST = 5; // acceleration of the ship in pixels per second per second
const TURN_SPEED = 360; // turn speed in degrees per second

/** @type {HTMLCanvasElement} */
var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");

// set up the spaceship object
var ship = {
    x: canv.width / 2,
    y: canv.height / 2,
    r: SHIP_SIZE / 2,
    a: 90 / 180 * Math.PI, // convert to radians
    rot: 0,
    thrusting: false,
    thrust: {
        x: 0,
        y: 0
    }
}

// set up event handlers

// set up the game loop
setInterval(update, 1000 / FPS);

function update() {
    // draw space
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    // draw the triangular ship

    ctx.strokeStyle = color;
    ctx.lineWidth = SHIP_SIZE / 20;
    ctx.beginPath();
    ctx.moveTo( // nose of the ship
        ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
        ship.y - 4 / 3 * ship.r * Math.sin(ship.a)
    );
    ctx.lineTo( // rear left
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + Math.sin(ship.a)),
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - Math.cos(ship.a))
    );
    ctx.lineTo( // rear right
        ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - Math.sin(ship.a)),
        ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + Math.cos(ship.a))
    );
    ctx.closePath();
    ctx.stroke();

}
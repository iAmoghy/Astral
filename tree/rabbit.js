const rabbitCost = 320000;
const fireRate = 150;
var jingle = new Audio("../assets/sounds/jingle.wav");
jingle.volume = 0.3;


var totalUpgradesStr = localStorage.getItem("totalUpgrades");

if (totalUpgradesStr == null || totalUpgradesStr < 0) {
    var totalUpgrades = 0;
} else {
    var totalUpgrades = parseInt(totalUpgradesStr);
}

/* Get astrallite */

var astrallite = localStorage.getItem("as");

/* Get basic */

var basicStr = localStorage.getItem("basic");

if (basicStr == null || basicStr < 0) {
    var basic = 0;
} else {
    var basic = parseInt(basicStr);
}

/* Get laser */

var laserStr = localStorage.getItem("laser");

if (laserStr == null || laserStr < 0) {
    var laser = 0;
} else {
    var laser = parseInt(laserStr);
}

/* Get turtle */

var turtleStr = localStorage.getItem("turtle");

if (turtleStr == null || turtleStr < 0) {
    var turtle = 0;
} else {
    var turtle = parseInt(turtleStr);
}

/* Get rabbit */

var rabbitStr = localStorage.getItem("rabbit");

if (rabbitStr == null || rabbitStr < 0) {
    var rabbit = 0;
} else {
    var rabbit = parseInt(rabbitStr);
}

if (rabbit) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || laser != 1 || turtle != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < rabbitCost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


$('#purchase').on('click', function () {

    jingle.play()
    
    rabbit = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', rabbit==1);

    // console.log(astrallite);

    astrallite -= rabbitCost;


    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("rabbit", rabbit);

    localStorage.setItem("lives", lives);
});


const tripleCost = 160000;
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

/* Get triple */

var tripleStr = localStorage.getItem("triple");

if (tripleStr == null || tripleStr < 0) {
    var triple = 0;
} else {
    var triple = parseInt(tripleStr);
}


if (triple) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || laser != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < tripleCost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


$('#purchase').on('click', function () {

    jingle.play()
    
    triple = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', triple==1);

    // console.log(astrallite);

    astrallite -= tripleCost;

    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("triple", triple);
});


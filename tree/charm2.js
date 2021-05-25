const charm2Cost = 320000;
const charmLevel = 2;
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

/* Get extraction */

var extractionStr = localStorage.getItem("extraction");

if (extractionStr == null || extractionStr < 0) {
    var extraction = 0;
} else {
    var extraction = parseInt(extractionStr);
}

/* Get charm1 */

var charm1Str = localStorage.getItem("charm1");

if (charm1Str == null || charm1Str < 0) {
    var charm1 = 0;
} else {
    var charm1 = parseInt(charm1Str);
}

/* Get charm2  */

var charm2Str = localStorage.getItem("charm2");

if (charm2Str == null || charm2Str < 0) {
    var charm2 = 0;
} else {
    var charm2 = parseInt(charm2Str);
}



if (charm2) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || extraction != 1 || charm1 != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < charm2Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


/* Disable checks */



$('#purchase').on('click', function () {

    jingle.play()
    
    charm2 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', charm2==1);

    // console.log(astrallite);

    astrallite -= charm2Cost;

    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("charm2", charm2);

    localStorage.setItem("charmLevel", charmLevel);
    

});


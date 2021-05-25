const charm3Cost = 640000;
const charmlevel = 3;
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

/* Get charm3  */

var charm3Str = localStorage.getItem("charm3");

if (charm3Str == null || charm3Str < 0) {
    var charm3 = 0;
} else {
    var charm3 = parseInt(charm3Str);
}


if (charm3) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || extraction != 1 || charm1 != 1 || charm2 != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < charm3Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    jingle.play()
    
    charm3 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', charm3==1);


    // console.log(astrallite);

    astrallite -= charm3Cost;
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);


    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("charm3", charm3);

    localStorage.setItem("charmLevel", charmLevel);
    

});


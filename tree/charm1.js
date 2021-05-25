const charm1Cost = 160000;
const charmLevel = 1;
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


if (charm1) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || extraction != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < charm1Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


$('#purchase').on('click', function () {

    jingle.play()
    
    charm1 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', charm1==1);


    // console.log(astrallite);

    astrallite -= charm1Cost;

    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("charm1", charm1);

    localStorage.setItem("charmLevel", charmLevel);
});


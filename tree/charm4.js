const charm4Cost = 1280000;
const charmLevel = 4;
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

/* Get charm4  */

var charm4Str = localStorage.getItem("charm4");

if (charm4Str == null || charm4Str < 0) {
    var charm4 = 0;
} else {
    var charm4 = parseInt(charm3Str);
}



if (charm4) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || extraction != 1 || charm1 != 1 || charm2 != 1 || charm3 != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < charm4Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    jingle.play()
    
    charm4 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', charm4==1);


    // console.log(astrallite);

    astrallite -= charm4Cost;
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);
    
    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("charm4", charm4);

    localStorage.setItem("charmLevel", charmLevel);
    

});


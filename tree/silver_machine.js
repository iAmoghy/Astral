const silverCost = 320000;
const extraction_coefficient = 8;
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

/* Get bronze */

var bronzeStr = localStorage.getItem("bronze");

if (bronzeStr == null || bronzeStr < 0) {
    var bronze = 0;
} else {
    var bronze = parseInt(bronzeStr);
}

/* Get silver  */

var silverStr = localStorage.getItem("silver");

if (silverStr == null || silverStr < 0) {
    var silver = 0;
} else {
    var silver = parseInt(silverStr);
}



if (silver) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || extraction != 1 || bronze != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < silverCost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


/* Disable checks */



$('#purchase').on('click', function () {

    jingle.play()
    
    silver = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', silver==1);

    // console.log(astrallite);

    astrallite -= silverCost;

    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("silver", silver);

    localStorage.setItem("extraction_coefficient", extraction_coefficient);
    

});


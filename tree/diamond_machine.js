const diamondCost = 1280000;
const extraction_coefficient = 32;
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

/* Get gold  */

var goldStr = localStorage.getItem("gold");

if (goldStr == null || goldStr < 0) {
    var gold = 0;
} else {
    var gold = parseInt(goldStr);
}

/* Get diamond  */

var diamondStr = localStorage.getItem("diamond");

if (diamondStr == null || diamondStr < 0) {
    var diamond = 0;
} else {
    var diamond = parseInt(goldStr);
}



if (diamond) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || extraction != 1 || bronze != 1 || silver != 1 || gold != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < diamondCost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    jingle.play()
    
    diamond = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', diamond==1);


    // console.log(astrallite);

    astrallite -= diamondCost;

    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);
    
    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("diamond", diamond);

    localStorage.setItem("extraction_coefficient", extraction_coefficient);
    

});


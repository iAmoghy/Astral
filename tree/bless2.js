const bless2Cost = 320000;
const blessLevel = 2;
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

/* Get bless1 */

var bless1Str = localStorage.getItem("bless1");

if (bless1Str == null || bless1Str < 0) {
    var bless1 = 0;
} else {
    var bless1 = parseInt(bless1Str);
}

/* Get bless2  */

var bless2Str = localStorage.getItem("bless2");

if (bless2Str == null || bless2Str < 0) {
    var bless2 = 0;
} else {
    var bless2 = parseInt(bless2Str);
}



if (bless2) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || extraction != 1 || bless1 != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < bless2Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


/* Disable checks */



$('#purchase').on('click', function () {

    jingle.play()
    
    bless2 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', bless2==1);

    // console.log(astrallite);

    astrallite -= bless2Cost;
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);
    
    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("bless2", bless2);

    localStorage.setItem("blessLevel", blessLevel);
    

});


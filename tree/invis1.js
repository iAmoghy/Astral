const invis1Cost = 320000;
const invisDuration = 3;
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

/* Get hull */

var hullStr = localStorage.getItem("hull");

if (hullStr == null || hullStr < 0) {
    var hull = 0;
} else {
    var hull = parseInt(hullStr);
}

/* Get titanium */

var titaniumStr = localStorage.getItem("titanium");

if (titaniumStr == null || titaniumStr < 0) {
    var titanium = 0;
} else {
    var titanium = parseInt(titaniumStr);
}

/* Get invis1 */

var invis1Str = localStorage.getItem("invis1");

if (invis1Str == null || invis1Str < 0) {
    var invis1 = 0;
} else {
    var invis1 = parseInt(invis1Str);
}

if (invis1) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || hull != 1 || titanium != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < invis1Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


$('#purchase').on('click', function () {

    jingle.play()
    
    invis1 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', invis1==1);

    // console.log(astrallite);

    astrallite -= invis1Cost;
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("invis1", invis1);

    localStorage.setItem("invisDuration", invisDuration);
});


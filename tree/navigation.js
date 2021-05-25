const navCost = 80000;
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

/* Get nav */

var navStr = localStorage.getItem("nav");

if (navStr == null || navStr < 0) {
    var nav = 0;
} else {
    var nav = parseInt(navStr);
}


if (nav) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < navCost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    jingle.play()
    
    nav = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', nav==1);
    astrallite = localStorage.getItem("as");

    // console.log(astrallite);

    astrallite -= navCost;
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("nav", nav);

});


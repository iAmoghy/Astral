const time1Cost = 160000;
const respawnTime = 2;

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

/* Get time1 */

var time1Str = localStorage.getItem("time1");

if (time1Str == null || time1Str < 0) {
    var time1 = 0;
} else {
    var time1 = parseInt(time1Str);
}


if (time1) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || nav != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < time1Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


$('#purchase').on('click', function () {

    jingle.play()
    
    time1 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', time1==1);


    // console.log(astrallite);

    astrallite -= time1Cost;

    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);
    
    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("time1", time1);

    localStorage.setItem("respawnTime", respawnTime);

});


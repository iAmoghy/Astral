const time3Cost = 640000;
const respawnTime = 0.5;
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

/* Get time2  */

var time2Str = localStorage.getItem("time2");

if (time2Str == null || time2Str < 0) {
    var time2 = 0;
} else {
    var time2 = parseInt(time2Str);
}

/* Get time3  */

var time3Str = localStorage.getItem("time3");

if (time3Str == null || time3Str < 0) {
    var time3 = 0;
} else {
    var time3 = parseInt(time3Str);
}


if (time3) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || nav != 1 || time1 != 1 || time2 != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < time3Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    jingle.play()
    
    time3 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', time3==1);


    // console.log(astrallite);

    astrallite -= time3Cost;

    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);
    
    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("time3", time3);

    localStorage.setItem("respawnTime", respawnTime);
    

});


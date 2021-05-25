const layer3Cost = 320000;
const entryLayer = 3;
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

/* Get layer2 */

var layer2Str = localStorage.getItem("layer2");

if (layer2Str == null || layer2Str < 0) {
    var layer2 = 0;
} else {
    var layer2 = parseInt(layer2Str);
}

/* Get layer3  */

var layer3Str = localStorage.getItem("layer3");

if (layer3Str == null || layer3Str < 0) {
    var layer3 = 0;
} else {
    var layer3 = parseInt(layer3Str);
}



if (layer3) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || nav != 1 || layer2 != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < layer3Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}


/* Disable checks */



$('#purchase').on('click', function () {

    jingle.play()
    
    layer3 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', layer3==1);

    // console.log(astrallite);

    astrallite -= layer3Cost;
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);
    
    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("layer3", layer3);

    localStorage.setItem("entryLayer", entryLayer);
    

});


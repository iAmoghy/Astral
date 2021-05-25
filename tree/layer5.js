const layer5Cost = 1280000;
const entryLayer = 5;
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

/* Get layer4  */

var layer4Str = localStorage.getItem("layer4");

if (layer4Str == null || layer4Str < 0) {
    var layer4 = 0;
} else {
    var layer4 = parseInt(layer4Str);
}

/* Get layer5  */

var layer5Str = localStorage.getItem("layer5");

if (layer5Str == null || layer5Str < 0) {
    var layer5 = 0;
} else {
    var layer5 = parseInt(layer4Str);
}



if (layer5) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || nav != 1 || layer2 != 1 || layer3 != 1 || layer4 != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < layer5Cost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    jingle.play()
    
    layer5 = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', layer5==1);


    // console.log(astrallite);

    astrallite -= layer5Cost;
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("layer5", layer5);

    localStorage.setItem("entryLayer", entryLayer);
    

});


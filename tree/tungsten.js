const tungstenCost = 1280000;
const lives = 5;
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

/* Get osmium  */

var osmiumStr = localStorage.getItem("osmium");

if (osmiumStr == null || osmiumStr < 0) {
    var osmium = 0;
} else {
    var osmium = parseInt(osmiumStr);
}

/* Get iridium  */

var iridiumStr = localStorage.getItem("iridium");

if (iridiumStr == null || iridiumStr < 0) {
    var iridium = 0;
} else {
    var iridium = parseInt(iridiumStr);
}

/* Get tungsten  */

var tungstenStr = localStorage.getItem("tungsten");

if (tungstenStr == null || tungstenStr < 0) {
    var tungsten = 0;
} else {
    var tungsten = parseInt(iridiumStr);
}



if (tungsten) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || hull != 1 || titanium != 1 || osmium != 1 || iridium != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < tungstenCost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    jingle.play()
    
    tungsten = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', tungsten==1);


    // console.log(astrallite);

    astrallite -= tungstenCost;
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);
    
    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("tungsten", tungsten);

    localStorage.setItem("hull_coefficient", hull_coefficient);
    

});


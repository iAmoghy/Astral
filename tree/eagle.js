const eagleCost = 1280000;
const fireRate = 75;
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

/* Get laser */

var laserStr = localStorage.getItem("laser");

if (laserStr == null || laserStr < 0) {
    var laser = 0;
} else {
    var laser = parseInt(laserStr);
}

/* Get turtle */

var turtleStr = localStorage.getItem("turtle");

if (turtleStr == null || turtleStr < 0) {
    var turtle = 0;
} else {
    var turtle = parseInt(turtleStr);
}

/* Get rabbit  */

var rabbitStr = localStorage.getItem("rabbit");

if (rabbitStr == null || rabbitStr < 0) {
    var rabbit = 0;
} else {
    var rabbit = parseInt(rabbitStr);
}

/* Get cheetah  */

var cheetahStr = localStorage.getItem("cheetah");

if (cheetahStr == null || cheetahStr < 0) {
    var cheetah = 0;
} else {
    var cheetah = parseInt(cheetahStr);
}

/* Get eagle  */

var eagleStr = localStorage.getItem("eagle");

if (eagleStr == null || eagleStr < 0) {
    var eagle = 0;
} else {
    var eagle = parseInt(cheetahStr);
}



if (eagle) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (basic != 1 || laser != 1 || turtle != 1 || rabbit != 1 || cheetah != 1) {
    $('#purchaseText').text('Upgrade not unlocked 🔒');
    $('#purchase').prop('disabled', true);
}

if (astrallite < eagleCost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    jingle.play()
    
    eagle = 1
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', eagle==1);


    // console.log(astrallite);

    astrallite -= eagleCost;
    
    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    // console.log(astrallite);
    localStorage.setItem("as", astrallite);
    localStorage.setItem("eagle", eagle);

    localStorage.setItem("fireRate", fireRate);
    

});


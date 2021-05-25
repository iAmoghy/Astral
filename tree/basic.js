const basicCost = 10000;


var totalUpgradesStr = localStorage.getItem("totalUpgrades");

if (totalUpgradesStr == null || totalUpgradesStr < 0) {
    var totalUpgrades = 0;
} else {
    var totalUpgrades = parseInt(totalUpgradesStr);
}

var astrallite = localStorage.getItem("as");
var basicStr = localStorage.getItem("basic");
var jingle = new Audio("../assets/sounds/jingle.wav");
jingle.volume = 0.3;

if (basicStr == null || basicStr < 0) {
    var basic = 0;
} else {
    var basic = parseInt(basicStr);
}

if (basic) {
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', true);
}

if (astrallite < basicCost) {
    $('#purchaseText').text('Not enough astrallite 🔒');
    $('#purchase').prop('disabled', true);
}

$('#purchase').on('click', function () {

    // play the jingle sound effect
    jingle.play();

    // register item purchase
    basic = 1;

    //change button text, disable button
    $('#purchaseText').text('Already purchased ✔️');
    $('#purchase').prop('disabled', basic==1);




    astrallite -= basicCost;

    totalUpgrades += 1;
    localStorage.setItem("totalUpgrades", totalUpgrades);

    localStorage.setItem("as", astrallite);
    localStorage.setItem("basic", basic);



});


// Scrollbar script

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}



// CLICKER SECTION

// Get Astrallite count

var astralliteStr = localStorage.getItem("as");

if (astralliteStr == null || isNaN(astralliteStr)) {
    var astrallite = 0;
} else {
    var astrallite = Math.ceil(parseInt(astralliteStr));
}

// Get l1 count

var l1Str = localStorage.getItem("l1");

if (l1Str == null || isNaN(l1Str)) {
    var l1Count = 0;
} else {
    var l1Count = parseInt(l1Str);
}

// Get l2 count

var l2Str = localStorage.getItem("l2");

if (l2Str == null || isNaN(l2Str)) {
    var l2Count = 0;
} else {
    var l2Count = parseInt(l2Str);
}

// Get l3 count

var l3Str = localStorage.getItem("l3");

if (l3Str == null || isNaN(l3Str)) {
    var l3Count = 0;
} else {
    var l3Count = parseInt(l3Str);
}

// Get l4 count

var l4Str = localStorage.getItem("l4");

if (l4Str == null || isNaN(l4Str)) {
    var l4Count = 0;
} else {
    var l4Count = parseInt(l4Str);
}

// Get l5 count

var l5Str = localStorage.getItem("l5");

if (l5Str == null || isNaN(l5Str)) {
    var l5Count = 0;
} else {
    var l5Count = parseInt(l5Str);
}

// Get l6 count

var l6Str = localStorage.getItem("l6");

if (l6Str == null || isNaN(l6Str)) {
    var l6Count = 0;
} else {
    var l6Count = parseInt(l6Str);
}

// Get l7 count

var l7Str = localStorage.getItem("l7");

if (l7Str == null || isNaN(l7Str)) {
    var l7Count = 0;
} else {
    var l7Count = parseInt(l7Str);
}

// Get l8 count

var l8Str = localStorage.getItem("l8");

if (l8Str == null || isNaN(l8Str)) {
    var l8Count = 0;
} else {
    var l8Count = parseInt(l8Str);
}

// Get l9 count

var l9Str = localStorage.getItem("l9");

if (l9Str == null || isNaN(l9Str)) {
    var l9Count = 0;
} else {
    var l9Count = parseInt(l9Str);
}

// Get l6 count

var l10Str = localStorage.getItem("l10");

if (l10Str == null || isNaN(l10Str)) {
    var l10Count = 0;
} else {
    var l10Count = parseInt(l10Str);
}

// Get l11 count

var l11Str = localStorage.getItem("l11");

if (l11Str == null || isNaN(l11Str)) {
    var l11Count = 0;
} else {
    var l11Count = parseInt(l11Str);
}

// Get l12 count

var l12Str = localStorage.getItem("l12");

if (l12Str == null || isNaN(l12Str)) {
    var l12Count = 0;
} else {
    var l12Count = parseInt(l12Str);
}

// Get prices 

// Get l1 cost

var l1CostStr = localStorage.getItem("l1Cost");

if (l1CostStr == null || isNaN(l1CostStr)) {
    var l1Cost = 20;
} else {
    var l1Cost = parseInt(l1CostStr);
}

// Get l2 cost

var l2CostStr = localStorage.getItem("l2Cost");

if (l2CostStr == null || isNaN(l2CostStr)) {
    var l2Cost = 60;
} else {
    var l2Cost = parseInt(l2CostStr);
}

// Get l3 cost

var l3CostStr = localStorage.getItem("l3Cost");

if (l3CostStr == null || isNaN(l3CostStr)) {
    var l3Cost = 180;
} else {
    var l3Cost = parseInt(l3CostStr);
}

// Get l4 cost

var l4CostStr = localStorage.getItem("l4Cost");

if (l4CostStr == null || isNaN(l4CostStr)) {
    var l4Cost = 540;
} else {
    var l4Cost = parseInt(l4CostStr);
}

// Get l5 cost

var l5CostStr = localStorage.getItem("l5Cost");

if (l5CostStr == null || isNaN(l5CostStr)) {
    var l5Cost = 1620;
} else {
    var l5Cost = parseInt(l5Cost);
}

// Get l6 cost

var l6CostStr = localStorage.getItem("l6Cost");

if (l6CostStr == null || isNaN(l6CostStr)) {
    var l6Cost = 4860;
} else {
    var l6Cost = parseInt(l6CostStr);
}

// Get l7 cost

var l7CostStr = localStorage.getItem("l7Cost");

if (l7CostStr == null || isNaN(l7CostStr)) {
    var l7Cost = 14580;
} else {
    var l7Cost = parseInt(l7CostStr);
}

// Get l8 cost

var l8CostStr = localStorage.getItem("l8Cost");

if (l8CostStr == null || isNaN(l8CostStr)) {
    var l8Cost = 43740;
} else {
    var l8Cost = parseInt(l8CostStr);
}

// Get l9 cost

var l9CostStr = localStorage.getItem("l9Cost");

if (l9CostStr == null || isNaN(l9CostStr)) {
    var l9Cost = 131220;
} else {
    var l9Cost = parseInt(l9CostStr);
}

// Get l10 cost

var l10CostStr = localStorage.getItem("l10Cost");

if (l10CostStr == null || isNaN(l10CostStr)) {
    var l10Cost = 393660;
} else {
    var l10Cost = parseInt(l10CostStr);
}

// Get l11 cost

var l11CostStr = localStorage.getItem("l11Cost");

if (l11CostStr == null || isNaN(l11CostStr)) {
    var l11Cost = 1180980;
} else {
    var l11Cost = parseInt(l11CostStr);
}

// Get l12 cost

var l12CostStr = localStorage.getItem("l12Cost");

if (l12CostStr == null || isNaN(l11CostStr)) {
    var l12Cost = 3542940;
} else {
    var l12Cost = parseInt(l12CostStr);
}

// Starting Costs - defined by the geometric sequence an = 20 * 30 ^ n-1 (before rounding)

var numMasterWidgeteers = 0;

var masterWidgeteerCost = 25;
var crCount = 0;




$('#l1').on('click', function () {
    l1Count++;

    // Deduct cost
    crCount -= l1Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l1Cost = Math.ceil(l1Cost * 1.1);
});

$('#l2').on('click', function () {
    l2Count++;

    // Deduct cost
    crCount -= l2Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l2Cost = Math.ceil(l2Cost * 1.1);
});

$('#l3').on('click', function () {
    l3Count++;

    // Deduct cost
    crCount -= l3Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l3Cost = Math.ceil(l3Cost * 1.1);
});

$('#l4').on('click', function () {
    l4Count++;

    // Deduct cost
    crCount -= l4Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l4Cost = Math.ceil(l4Cost * 1.1);
});


$('#l5').on('click', function () {
    l5Count++;

    // Deduct cost
    crCount -= l5Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l5Cost = Math.ceil(l5Cost * 1.1);
});

$('#l6').on('click', function () {
    l6Count++;

    // Deduct cost
    crCount -= l6Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l6Cost = Math.ceil(l6Cost * 1.1);
});

$('#l7').on('click', function () {
    l7Count++;

    // Deduct cost
    crCount -= l7Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l7Cost = Math.ceil(l7Cost * 1.1);
});

$('#l8').on('click', function () {
    l8Count++;

    // Deduct cost
    crCount -= l8Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l8Cost = Math.ceil(l8Cost * 1.1);
});

$('#l9').on('click', function () {
    l9Count++;

    // Deduct cost
    crCount -= l9Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l9Cost = Math.ceil(l9Cost * 1.1);
});

$('#l10').on('click', function () {
    l10Count++;

    // Deduct cost
    crCount -= l10Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l10Cost = Math.ceil(l10Cost * 1.1);
});

$('#l11').on('click', function () {
    l11Count++;

    // Deduct cost
    crCount -= l11Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l11Cost = Math.ceil(l11Cost * 1.1);
});

$('#l12').on('click', function () {
    l12Count++;

    // Deduct cost
    crCount -= l12Cost;
    localStorage.setItem("cr", crCount)

    // Increase cost for the next one, using Math.ceil() to round up
    l12Cost = Math.ceil(l12Cost * 1.1);
});



// Run UI update code every 10ms
window.setInterval(function () {

    astrallite = Math.ceil(astrallite)

    astrallite += Math.ceil(l1Count * 1 / 100);
    astrallite += Math.ceil(l2Count * 5 / 100);
    astrallite += Math.ceil(l3Count * 20 / 100);
    astrallite += Math.ceil(l4Count * 100 / 100);
    astrallite += Math.ceil(l5Count * 500 / 100);
    astrallite += Math.ceil(l6Count * 1200 / 100);
    astrallite += Math.ceil(l7Count * 2000 / 100);
    astrallite += Math.ceil(l8Count * 4000 / 100);
    astrallite += Math.ceil(l9Count * 12000 / 100);
    astrallite += Math.ceil(l10Count * 26000 / 100);
    astrallite += Math.ceil(l11Count * 40000 / 100);
    astrallite += Math.ceil(l12Count * 80000 / 100);

    // Masters add 5 per second (5/100 every 10ms)
    astrallite += (numMasterWidgeteers * 5 / 100);

    // Update main count
    $('#astrallite-count').text(Math.floor(astrallite));

    // Get ceretanium count from local storage
    var ceretaniumStr = localStorage.getItem("cr");

    if (ceretaniumStr == null || ceretaniumStr < 0 || isNaN(ceretaniumStr)) {
        crCount = 0;
    } else {
        crCount = parseInt(ceretaniumStr);
    }

    // Update ceretanium count on screen
    $('#cr-count').text(crCount);

    // Update costs
    $('#l1Text').text('Astrallite Ore Drills - ' + l1Cost);
    $('#l2Text').text('Advanced Astrallite Ore Drills - ' + l2Cost);
    $('#l3Text').text('Astrallite Ore Mines - ' + l3Cost);
    $('#l4Text').text('Mega Astrallite Ore Mines - ' + l4Cost);

    $('#l5Text').text('Astrallite Flower Bouquets - ' + l5Cost);
    $('#l6Text').text('Astrallite Flower Gardens - ' + l6Cost);
    $('#l7Text').text('Astrallite Flower Farms - ' + l7Cost);
    $('#l8Text').text('Astrallite Flower Plantations - ' + l8Cost);

    $('#l9Text').text('Molten Astrallite Jars - ' + l9Cost);
    $('#l10Text').text('Molten Astrallite Tubs - ' + l10Cost);
    $('#l11Text').text('Molten Astrallite Rivers - ' + l11Cost);
    $('#l12Text').text('Molten Astrallite Oceans - ' + l12Cost);

    $('#master-widgeteer').text('Hire Master Widgeteer - ' + masterWidgeteerCost);

    // Enable/Disable buttons
    $('#l1').prop('disabled', l1Cost > crCount);
    $('#l2').prop('disabled', l2Cost > crCount);
    $('#l3').prop('disabled', l3Cost > crCount);
    $('#l4').prop('disabled', l4Cost > crCount);

    $('#l5').prop('disabled', l5Cost > crCount);
    $('#l6').prop('disabled', l6Cost > crCount);
    $('#l7').prop('disabled', l7Cost > crCount);
    $('#l8').prop('disabled', l8Cost > crCount);

    $('#l9').prop('disabled', l9Cost > crCount);
    $('#l10').prop('disabled', l10Cost > crCount);
    $('#l11').prop('disabled', l11Cost > crCount);
    $('#l12').prop('disabled', l12Cost > crCount);


    $('#master-widgeteer').prop('disabled', masterWidgeteerCost > crCount);

    // Save Astrallite count

    localStorage.setItem("as", astrallite);

    // Save counts

    localStorage.setItem("l1", l1Count);
    localStorage.setItem("l2", l2Count);
    localStorage.setItem("l3", l3Count);
    localStorage.setItem("l4", l4Count);

    localStorage.setItem("l5", l5Count);
    localStorage.setItem("l6", l6Count);
    localStorage.setItem("l7", l7Count);
    localStorage.setItem("l8", l8Count);

    localStorage.setItem("l9", l9Count);
    localStorage.setItem("l10", l10Count);
    localStorage.setItem("l11", l11Count);
    localStorage.setItem("l12", l12Count);

    // Save prices

    localStorage.setItem("l1Cost", l1Cost);
    localStorage.setItem("l2Cost", l2Cost);
    localStorage.setItem("l3Cost", l3Cost);
    localStorage.setItem("l4Cost", l4Cost);

    localStorage.setItem("l5Cost", l5Cost);
    localStorage.setItem("l6Cost", l6Cost);
    localStorage.setItem("l7Cost", l7Cost);
    localStorage.setItem("l8Cost", l8Cost);

    localStorage.setItem("l9Cost", l9Cost);
    localStorage.setItem("l10Cost", l10Cost);
    localStorage.setItem("l11Cost", l11Cost);
    localStorage.setItem("l12Cost", l12Cost);

}, 10);


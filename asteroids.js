/* ASTRAL v1.0.1 - By Amogh Manral */

// STORAGE GETS //

var totalUpgradesStr = localStorage.getItem("totalUpgrades");

if (totalUpgradesStr == null || totalUpgradesStr < 0) {
    var totalUpgrades = 0;
} else {
    var totalUpgrades = parseInt(totalUpgradesStr);
}

// SHIP COLOR - from settings nav

var settingsColorStr = localStorage.getItem("color")

if (settingsColorStr == null) {
    var settingsColor = "white";
} else {
    var settingsColor = settingsColorStr;
}

// SENSITIVITIES - from settings nav

var turnSensitivityStr = localStorage.getItem("turnSensitivity");

if (turnSensitivityStr == null || turnSensitivityStr < 0) {
    var turnSensitivity = 50;
} else {
    var turnSensitivity = parseInt(turnSensitivityStr);
}

var thrustSensitivityStr = localStorage.getItem("thrustSensitivity");

if (thrustSensitivityStr == null || thrustSensitivityStr < 0) {
    var thrustSensitivity = 50;
} else {
    var thrustSensitivity = parseInt(thrustSensitivityStr);
}

// LIVES - from shield tree

var GAME_LIVESStr = localStorage.getItem("lives");

if (GAME_LIVESStr == null || GAME_LIVESStr < 0) {
    var GAME_LIVES = 1;
} else {
    var GAME_LIVES = parseInt(GAME_LIVESStr);
}

// Invis - from shield tree

var invisDurationStr = localStorage.getItem("invisDuration");

if (invisDurationStr == null || invisDurationStr < 0) {
    var SHIP_INV_DUR = 2;
} else {
    var SHIP_INV_DUR = parseInt(invisDurationStr);
}


// Extraction coefficient - from extraction tree

var extraction_coefficientStr = localStorage.getItem("extraction_coefficient");

if (extraction_coefficientStr == null) {
    var extraction_coefficient = 1;
} else {
    var extraction_coefficient = parseInt(extraction_coefficientStr);
}

// Laser fire rate - from laser tree

var fireRateStr = localStorage.getItem("fireRate");

if (fireRateStr == null) {
    var fireRate = 500;
} else {
    var fireRate = parseInt(fireRateStr);
}

// Triple Shot - from laser tree

var tripleStr = localStorage.getItem("triple");

if (tripleStr == null) {
    var triple = 0;
} else {
    var triple = parseInt(tripleStr);
}

// Respawn time - from navigation tree

var respawnTimeStr = localStorage.getItem("respawnTime");

if (respawnTimeStr == null) {
    var respawnTime = 3;
} else {
    var respawnTime = parseFloat(respawnTimeStr);
}

// Entry layer - from navigation tree

var entryLayerStr = localStorage.getItem("entryLayer");

if (entryLayerStr == null) {
    var entryLayer = 0; // displays as 1
} else {
    var entryLayer = parseInt(entryLayerStr) - 1;
}

// Bless level - from extraction tree

var blessLevelStr = localStorage.getItem("blessLevel");

if (blessLevelStr == null) {
    var blessLevel = 0;
} else {
    var blessLevel = parseInt(blessLevelStr);
}

// Charm level - from extraction tree

var charmLevelStr = localStorage.getItem("charmLevel");

if (charmLevelStr == null) {
    var charmLevel = 0;
} else {
    var charmLevel = parseInt(charmLevelStr);
}


// Automation 

var AUTOMATION_ONStr = localStorage.getItem("AUTOMATION_ON");

if (AUTOMATION_ONStr == null) {
    var AUTOMATION_ON = false;
} else {
    var AUTOMATION_ON = AUTOMATION_ONStr;
}



// CONSTANTS //

const FPS = 60; // frames per second
const FRICTION = 0.8; // friction coefficient of space (0 = no friction, 1 = lots of friction)
const LASER_DIST = 0.5; // max distance laser can travel as fraction of screen width
const LASER_EXPLODE_DUR = 0.2; // duration of the lasers' explosion in seconds
const LASER_MAX = 9999; // maximum number of lasers on screen at once
const LASER_SPD = 700; // speed of lasers in pixels per second
const ROID_SIZE = 100; // starting size of asteroids in pixels
const SAVE_KEY_SCORE = "highscore"; // save key for local storage of high score
const SHIP_BLINK_DUR = 0.15; // duration in seconds of a single blink during ship's invisibility
const SHIP_SIZE = 30; // ship height in pixels
const SHIP_THRUST = thrustSensitivity * 0.1; // acceleration of the ship in pixels per second per second
const SHIP_TURN_SPD = turnSensitivity * 5; // turn speed in degrees per second



// DEBUG FLAGS //


const SHOW_BOUNDING = false; // show or hide collision bounding
const SHOW_CENTRE_DOT = false; // show or hide ship's centre dot
const MUSIC_ON = false;
const SOUND_ON = true;

// TEXT//

const TEXT_FADE_TIME = 2.5; // text fade time in seconds
const TEXT_SIZE = 40; // text font height in pixels

// VARIABLES //

var ROID_NUM = 8; // starting number of asteroids

var ROID_JAG = 0.3; // jaggedness of the asteroids (0 = none, 1 = lots)
var ROID_PTS_LGE = 20; // points scored for a large asteroid
var ROID_PTS_MED = 50; // points scored for a medium asteroidwd
var ROID_PTS_SML = 100; // points scored for a small asteroid
var ROID_VERT = 10; // average number of vertices on each asteroidconst ROID_SPD = 50; // max starting speed of asteroids in pixels per second
var ROID_SPD = 300; // max starting speed of asteroids in pixels per second
var allowShoot = true;
var allowThrust = true;

var specialtypes = [
"slime" , // prevents shooting for 5 sec
"ice", // prevents ship for moving for 5 sec
"curse", // lose * 2 more cerentanium than explosion
"fire", // disable shields
"chorus" // like Minecraft Chorus Fruit, teleport randomly (uncontrollable) for 5 sec
]

var background = new Image()
background.src = "./assets/images/stars.png";



// neural network parameters
const NUM_INPUTS = 4;
const NUM_HIDDEN = 20;
const NUM_OUTPUTS = 1;
const NUM_SAMPLES = 100000; // number of training samples
const OUTPUT_LEFT = 0; // expected neural output for turning left
const OUTPUT_RIGHT = 1; // expected neural output for turning right
const OUTPUT_THRESHOLD = 0.05; // how close the prediction must be to commit to a turn
const RATE_OF_FIRE = 15; // shots per second


/** @type {HTMLCanvasElement} */
var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext("2d");

// set up sound effects
var fxExplode = new Sound("assets/sounds/dead.wav", 5, 0.08);
var fxHit = new Sound("assets/sounds/hit.wav", 5, 0.05);
var fxLaser = new Sound("assets/sounds/laser2.wav", 5, 0.05);
var fxThrust = new Sound();
var fxEnter = new Sound("assets/sounds/enter.wav", 5, 0.05);
var fxSlime = new Sound("assets/sounds/slime.mp3", 5, 0.05);
var fxTp = new Sound("assets/sounds/tp.mp3", 5, 0.05);
var fxIce = new Sound("assets/sounds/ice.mp3", 5, 0.05);

// set up the music
var music = new Music("assets/sounds/music-low.m4a", "sounds/music-high.m4a");
var roidsLeft, roidsTotal;

// set up the game parameters
var level, lives, roids, score, scoreHigh, ship, text, textAlpha;
newGame();


// set up the neural network
var nn, aiShootTime = 0;
if (AUTOMATION_ON) {
    nn = new NeuralNetwork(NUM_INPUTS, NUM_HIDDEN, NUM_OUTPUTS);

    // train the network
    let ax, ay, sa, sx, sy;
    for (let i = 0; i < NUM_SAMPLES; i++) {
        
        // random asteroid location (include off-screen data)
        ax = Math.random() * (canv.width + ROID_SIZE) - ROID_SIZE / 2;
        ay = Math.random() * (canv.height + ROID_SIZE) - ROID_SIZE / 2;

        // ship's angle and position
        sa = Math.random() * Math.PI * 2;
        sx = ship.x;
        sy = ship.y;

        // calculate the angle to the asteroid
        let angle = angleToPoint(sx, sy, sa, ax, ay);

        // determine the direction to turn
        let direction = angle > Math.PI ? OUTPUT_LEFT : OUTPUT_RIGHT;

        // train the network
        nn.train(normaliseInput(ax, ay, angle, sa), [direction]);
    }
}

// set up event handlers
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
});


// set up the game loop
setInterval(update, 1000 / FPS);

function angleToPoint(x, y, bearing, targetX, targetY) {
    let angleToTarget = Math.atan2(-targetY + y, targetX - x);
    let diff = bearing - angleToTarget;
    return (diff + Math.PI * 2) % (Math.PI * 2);
}


function createAsteroidBelt() {

    roids = [];
    roidsTotal = (ROID_NUM + level) * 7;
    roidsLeft = roidsTotal;
    var x, y;


    for (var i = 0; i < ROID_NUM + level; i++) {
        do {
            x = Math.floor(Math.random() * canv.width); // spawn in random x + y location
            y = Math.floor(Math.random() * canv.height);
        } while (distBetweenPoints(ship.x, ship.y, x, y) < ROID_SIZE * 2 + ship.r); // make sure not touching ship

        roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 2)));

    }
}

function destroyAsteroid(index) {

    var x = roids[index].x;
    var y = roids[index].y;
    var r = roids[index].r;
    var special = roids[index].special;
    var specialtype = roids[index].specialtype;
    var golden = roids[index].golden;

    randomizer = Math.random()

    function sizeDivisor(min, max) {
        return (Math.random() * (max - min + 1) + min); // used to vary the sizes of the asteroids a bit
    }


    if (r == Math.ceil(ROID_SIZE / 2)) { // large asteroid

        if (charmLevel == 4) {

            if (randomizer <= 0.05) { // 5% chance to spawn special

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4), true, false));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else if (randomizer > 0.05 && randomizer <= 0.4755) { // 47.5% chance split into two mediums

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else { // 47.5% chance split into one medium
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
            }

        } else if (charmLevel == 3) {

            if (randomizer <= 0.1) { // 10% chance to spawn special

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4), true, false));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else if (randomizer > 0.1 && randomizer <= 0.55) {

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else {
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
            }

        } else if (charmLevel == 2) {

            if (randomizer <= 0.15) { // 15% chance to spawn special

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4), true, false));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else if (randomizer > 0.15 && randomizer <= 0.575) {

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else {
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
            }

        } else if (charmLevel == 1) {

            if (randomizer <= 0.2) { // 20% chance to spawn special

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4), true, false));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else if (randomizer > 0.2 && randomizer <= 0.6) {

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else {
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
            }

        } else if (charmLevel == 0) {

            if (randomizer <= 0.25) { // 25% chance to spawn special

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4), true, false));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else if (randomizer > 0.25 && randomizer <= 0.625) {

                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));

            } else {
                roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / 4)));
            }
        }

        score += (ROID_PTS_LGE * extraction_coefficient);

    } else if (r == Math.ceil(ROID_SIZE / 4)) { // medium asteroid

        console.log("medium?")
        if (special) {


            if (specialtype == "slime") {

                fxSlime.play()

                
                
                var i = 0;

                var slimeInterval = setInterval(function(){

                    i += 1;

                    allowShoot = false;

                    if (i==5) {
                        clearInterval(slimeInterval);
                        allowShoot = true;
                    }

                }, 1000);

                allowShoot = true;

            } else if (specialtype == "ice") {

                fxIce.play();

                var i = 0;
                
                var iceInterval = setInterval(function(){

                    i += 1;

                    allowThrust = false;


                    if (i==5) {
                        clearInterval(iceInterval);
                        allowThrust = true;
                    }

                }, 1000);

            } else if (specialtype == "curse") {


                score -= extraction_coefficient * 5000;

            } else if (specialtype == "fire") {


                lives = 1;

            } else if (specialtype == "chorus") {

                fxTp.play();


                var i = 0;

                var chorusInterval = setInterval(function(){

                    i += 1;

                    ship.x = Math.random() * (canv.width + ROID_SIZE) - ROID_SIZE / 2;
                    ship.y = Math.random() * (canv.height + ROID_SIZE) - ROID_SIZE / 2;
                    fxTp.play()

                    if (i==5) {
                        clearInterval(chorusInterval);
                    }


                }, 1000);


            }

        } else {

            if (blessLevel == 0) {

                if (randomizer <= 0.05) { // 5% chance to spawn golden asteroid
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8)), false, true));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else if (randomizer > 0.05 && randomizer <= 0.4755) { // 47.5% chance split into two smalls
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else { // 47.5% chance split into one small
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                }
    
            } else if (blessLevel == 1) {
    
                if (randomizer <= 0.1) { // 10% chance to spawn golden asteroid
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8)), false, true));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else if (randomizer > 0.1 && randomizer <= 0.55) {
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else {
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                }
    
            } else if (blessLevel == 2) {
    
                if (randomizer <= 0.15) { // 15% chance to spawn golden asteroid
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8)), false, true));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else if (randomizer > 0.15 && randomizer <= 0.575) {
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else {
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                }
    
            } else if (blessLevel == 3) {
    
                if (randomizer <= 0.2) { // 20% chance to spawn golden asteroid
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8)), false, true));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else if (randomizer > 0.2 && randomizer <= 0.6) {
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else { // 47.5% chance split into one small
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                }
    
            } else if (blesslevel == 4) {
    
                if (randomizer <= 0.25) { // 25% chance to spawn golden asteroid
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8)), false, true));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else if (randomizer > 0.25 && randomizer <= 0.625) {
    
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
    
                } else { // 47.5% chance split into one small
                    roids.push(newAsteroid(x, y, Math.ceil(ROID_SIZE / sizeDivisor(6, 8))));
                }
            }    


        }

        score += (ROID_PTS_MED * extraction_coefficient); // add score for medium asteroid

    } else {

        if (golden) {
            score += (ROID_PTS_SML * 40); 
        }
        
        score += (ROID_PTS_SML * extraction_coefficient); 
    }

    // check high score
    if (score > scoreHigh) {
        scoreHigh = score;
        localStorage.setItem(SAVE_KEY_SCORE, scoreHigh);
    }

    // update ceretanium count

    localStorage.setItem("cr", score)

    // destroy the asteroid
    roids.splice(index, 1);
    fxHit.play();

    // calculate the ratio of remaining asteroids to determine music tempo
    roidsLeft--;
    music.setAsteroidRatio(roidsLeft / roidsTotal);

    // new level when no more asteroids
    if (roids.length < 2) {
        level++;
        newLevel();
    }
}




function distBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function drawShip(x, y, a, colour) {

    ctx.strokeStyle = settingsColor;
    ctx.strokeStyle = colour;
    ctx.lineWidth = SHIP_SIZE / 15;
    ctx.beginPath();
    
    ctx.moveTo( // nose of the ship
        x + 4 / 3 * ship.r * Math.cos(a),
        y - 4 / 3 * ship.r * Math.sin(a)
    );

    ctx.lineTo( // rear left
        x - ship.r * (2 / 3 * Math.cos(a) + Math.sin(a)),
        y + ship.r * (2 / 3 * Math.sin(a) - Math.cos(a))
    );
    ctx.lineTo( // rear right
        x - ship.r * (2 / 3 * Math.cos(a) - Math.sin(a)),
        y + ship.r * (2 / 3 * Math.sin(a) + Math.cos(a))
    );

    ctx.closePath();
    ctx.stroke();
    
}


function explodeShip() {
    ship.explodeTime = Math.ceil(respawnTime * FPS);
    fxExplode.play();
}

function gameOver() {

    
    // if shields have not been purchased, set lives back to 1
    if (GAME_LIVES == 1) {
        lives = GAME_LIVES;
        ship = newShip();
    }

    if (GAME_LIVES > 1) {

        lives = GAME_LIVES;
    
    }

    textAlpha = 1.0;

}

function keyDown(/** @type {KeyboardEvent} */ ev) {

    if (ship.dead) {
        return;
    }

    switch(ev.keyCode) {

        case 32: // space bar (shoot laser)

            if (allowShoot) {
                shootLaser();
            }
            break;

        case 65: // left arrow (rotate ship left)
            ship.rot = SHIP_TURN_SPD / 180 * Math.PI / FPS;
            break;

        case 87: // up arrow (thrust the ship forward)

            if (allowThrust) {
                ship.thrusting = true;
            }
            break;

        case 68: // right arrow (rotate ship right)
            ship.rot = -SHIP_TURN_SPD / 180 * Math.PI / FPS;
            break;

    }
}

function keyUp(/** @type {KeyboardEvent} */ ev) {

    if (ship.dead) {
        return;
    }

    switch(ev.keyCode) {
        case 32: // space bar (allow shooting again)
            ship.canShoot = true;
            break;
        case 65: // left arrow (stop rotating left)
            ship.rot = 0;
            break;
        case 87: // up arrow (stop thrusting)
            ship.thrusting = false;
            break;
        case 68: // right arrow (stop rotating right)
            ship.rot = 0;
            break;
    }
}

/* Rapid Fire (Mouse Hold) */


$('#gameCanvas').on({

    mousedown : function () {

        if (allowShoot) {
            interval = window.setInterval(function(){
                shootLaser();
                ship.canShoot = true;
            }, fireRate); // allow fire at unlocked fire rate
        }

        },

        mouseup : function () {

            if (allowShoot) {
                window.clearInterval(interval);
            }

        }
        
});



/* Single Fire (Mouse Click) */

function singleShoot() {

    if (allowShoot) {
        shootLaser();
        ship.canShoot = true;
    }

}

function newAsteroid(x, y, r, special = false, golden = false) {

    var lvlMult = 1 + 0.1 * level;
    var specialtype = specialtypes[Math.floor(Math.random() * specialtypes.length)];

    
    var roid = {
        x: x,
        y: y,
        xv: Math.random() * ROID_SPD * lvlMult / FPS * (Math.random() < 0.5 ? 1 : -1),
        yv: Math.random() * ROID_SPD * lvlMult / FPS * (Math.random() < 0.5 ? 1 : -1),
        a: Math.random() * Math.PI * 2, // in radians
        r: r,
        offs: [],
        vert: Math.floor(Math.random() * (ROID_VERT + 1) + ROID_VERT / 2),
        special: special,
        specialtype: specialtype,
        golden: golden
    };

    // populate the offsets array
    for (var i = 0; i < roid.vert; i++) {
        roid.offs.push(Math.random() * ROID_JAG * 2 + 1 - ROID_JAG);
    }

    return roid;
}


function newGame() {

    fxEnter.play()

    level = entryLayer; // set level to the layer purchased
    lives = GAME_LIVES;
    score = 0;
    ship = newShip();

    // get the high score from local storage
    var scoreStr = localStorage.getItem(SAVE_KEY_SCORE);
    if (scoreStr == null) {
        scoreHigh = 0;
    } else {
        scoreHigh = parseInt(scoreStr);
    }

    var ceretaniumStr = localStorage.getItem("cr");
    if (ceretaniumStr == null) {
        score = 0;
    } else {
        score = parseInt(ceretaniumStr);
    }


    newLevel();
}

function newLevel() {

    fxEnter.play()
    music.setAsteroidRatio(1);
    text = "LAYER " + (level + 1);
    textAlpha = 1.0;

    if (level > 0) {

        // ROID_JAG *= 1.3; // jaggedness of the asteroids (0 = none, 1 = lots)
        ROID_PTS_LGE *= 1.3; // points scored for a large asteroid
        ROID_PTS_MED *= 1.3; // points scored for a medium asteroidwd
        ROID_PTS_SML *= 1.3; // points scored for a small asteroid


    }


    createAsteroidBelt();


}

function newShip() {


    return {
        x: canv.width / 2,
        y: canv.height / 2,
        a: 90 / 180 * Math.PI, // convert to radians
        r: SHIP_SIZE / 2,
        blinkNum: Math.ceil(SHIP_INV_DUR / SHIP_BLINK_DUR),
        blinkTime: Math.ceil(SHIP_BLINK_DUR * FPS),
        canShoot: true,
        dead: false,
        explodeTime: 0,
        lasers: [],
        rot: 0,
        thrusting: false,
        thrust: {
            x: 0,
            y: 0
        }
    }
}


function normaliseInput(roidX, roidY, roidA, shipA) {
    // normalise the values to between 0 and 1
    let input = [];
    input[0] = (roidX + ROID_SIZE / 2) / (canv.width + ROID_SIZE);
    input[1] = (roidY + ROID_SIZE / 2) / (canv.height + ROID_SIZE);
    input[2] = roidA / (Math.PI * 2);
    input[3] = shipA / (Math.PI * 2);
    return input;
}

function rotateShip(right) {
    let sign = right ? -1 : 1;
    ship.rot = SHIP_TURN_SPD / 180 * Math.PI / FPS * sign;
}


function shootLaser() {

    // create the laser object
    if (ship.canShoot && ship.lasers.length < LASER_MAX) {

        ship.lasers.push({ // from the nose of the ship
            x: ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
            y: ship.y - 4 / 3 * ship.r * Math.sin(ship.a),
            xv: LASER_SPD * Math.cos(ship.a) / FPS,
            yv: -LASER_SPD * Math.sin(ship.a) / FPS,
            dist: 0,
            explodeTime: 0});

        if (triple) { // if triple shot unlocked, push two extra lasers

            ship.lasers.push({ // from the nose of the ship
                x: (ship.x + 4 / 3 * ship.r * Math.cos(ship.a)) - 20,
                y: (ship.y - 4 / 3 * ship.r * Math.sin(ship.a)) - 20,
                xv: LASER_SPD * Math.cos(ship.a) / FPS,
                yv: -LASER_SPD * Math.sin(ship.a) / FPS,
                dist: 0,
                explodeTime: 0
            
            });
    
            ship.lasers.push({ // from the nose of the ship
                x: (ship.x + 4 / 3 * ship.r * Math.cos(ship.a)) + 20,
                y: (ship.y - 4 / 3 * ship.r * Math.sin(ship.a)) + 20,
                xv: LASER_SPD * Math.cos(ship.a) / FPS,
                yv: -LASER_SPD * Math.sin(ship.a) / FPS,
                dist: 0,
                explodeTime: 0
    
            });

        }



        fxLaser.play();
    }

    // prevent further shooting
    ship.canShoot = false;
}

function Music(srcLow, srcHigh) {
    this.soundLow = new Audio(srcLow);
    this.soundHigh = new Audio(srcHigh);
    this.low = true;
    this.tempo = 1.0; // seconds per beat
    this.beatTime = 0; // frames left until next beat

    this.play = function() {
        if (MUSIC_ON) {
            if (this.low) {
                this.soundLow.play();
            } else {
                this.soundHigh.play();
            }
            this.low = !this.low;
        }
    }

    this.setAsteroidRatio = function(ratio) {
        this.tempo = 1.0 - 0.75 * (1.0 - ratio);
    }

    this.tick = function() {
        if (this.beatTime == 0) {
            this.play();
            this.beatTime = Math.ceil(this.tempo * FPS);
        } else {
            this.beatTime--;
        }
    }
}

function Sound(src, maxStreams = 1, vol = 1.0) {
    this.streamNum = 0;
    this.streams = [];
    for (var i = 0; i < maxStreams; i++) {
        this.streams.push(new Audio(src));
        this.streams[i].volume = vol;
    }

    this.play = function() {
        if (SOUND_ON) {
            this.streamNum = (this.streamNum + 1) % maxStreams;
            this.streams[this.streamNum].play();
        }
    }

    this.stop = function() {
        this.streams[this.streamNum].pause();
        this.streams[this.streamNum].currentTime = 0;
    }
}

function update() {


    if (score < 0 || isNaN(score)) {
        score = 0;
    }


    var blinkOn = ship.blinkNum % 2 == 0;
    var exploding = ship.explodeTime > 0;

    // use the neural network to rotate the ship and shoot
    if (AUTOMATION_ON && !ship.dead) {

        // compute the closest asteroid
        let c = 0; // closest index
        let dist0 = distBetweenPoints(ship.x, ship.y, roids[0].x, roids[0].y);
        for (let i = 1; i < roids.length; i++) {
            let dist1 = distBetweenPoints(ship.x, ship.y, roids[i].x, roids[i].y);
            if (dist1 < dist0) {
                dist0 = dist1;
                c = i;
            }
        }
        
        // make a prediction based on current data
        let ax = roids[c].x;
        let ay = roids[c].y;
        let sa = ship.a;
        let sx = ship.x;
        let sy = ship.y;
        let angle = angleToPoint(sx, sy, sa, ax, ay);
        let predict = nn.feedForward(normaliseInput(ax, ay, angle, sa)).data[0][0];

        // make a turn
        let dLeft = Math.abs(predict - OUTPUT_LEFT);
        let dRight = Math.abs(predict - OUTPUT_RIGHT);
        if (dLeft < OUTPUT_THRESHOLD) {
            rotateShip(false);
        } else if (dRight < OUTPUT_THRESHOLD) {
            rotateShip(true);
        } else {
            ship.rot = 0; // stop rotating
        }

        // shoot the laser
        if (aiShootTime == 0) {
            aiShootTime = Math.ceil(FPS / RATE_OF_FIRE);
            ship.canShoot = true;
            shootLaser();
        } else {
            aiShootTime--;
        }
    }

    // tick the music
    music.tick();

    // draw stars in background
    ctx.drawImage(background, 0, 0, canv.width, canv.height)

    // draw the asteroids
    var a, r, x, y, offs, vert, special, specialtype;

    for (var i = 0; i < roids.length; i++) {

        // get the asteroid properties
        a = roids[i].a;
        r = roids[i].r;
        x = roids[i].x;
        y = roids[i].y;
        offs = roids[i].offs;
        vert = roids[i].vert;
        special = roids[i].special;
        specialtype = roids[i].specialtype;
        golden = roids[i].golden;


        if (special) {

            if (specialtype == "fire") {

                ctx.strokeStyle = "red"; // white outline for asteroids
                ctx.fillStyle = "#4a4948"; // space-grey fill to make them look nice and asteroid-y :)

            }

            if (specialtype == "slime") {

                ctx.strokeStyle = "lime"; // white outline for asteroids
                ctx.fillStyle = "#4a4948"; // space-grey fill to make them look nice and asteroid-y :)

            }

            if (specialtype == "ice") {

                ctx.strokeStyle = "blue"; // white outline for asteroids
                ctx.fillStyle = "#4a4948"; // space-grey fill to make them look nice and asteroid-y :)
                
            }

            if (specialtype == "curse") {

                ctx.strokeStyle = "purple"; // white outline for asteroids
                ctx.fillStyle = "#4a4948"; // space-grey fill to make them look nice and asteroid-y :)
                
            }

            if (specialtype == "chorus") {

                ctx.strokeStyle = "violet"; // white outline for asteroids
                ctx.fillStyle = "#4a4948"; // space-grey fill to make them look nice and asteroid-y :)
                
            }

        } else if (golden) {

            ctx.strokeStyle = "yellow"; // white outline for normal asteroids
            ctx.fillStyle = "#4a4948"; // space-grey fill to make them look nice and asteroid-y :)

        } else {

            ctx.strokeStyle = "white"; // white outline for normal asteroids
            ctx.fillStyle = "#4a4948"; // space-grey fill to make them look nice and asteroid-y :)

        }

        ctx.lineWidth = SHIP_SIZE / 10;
        
        // draw the path
        ctx.beginPath();
        ctx.moveTo(
            x + r * offs[0] * Math.cos(a),
            y + r * offs[0] * Math.sin(a)
        );

        // draw the polygon
        for (var j = 1; j < vert; j++) {
            ctx.lineTo(
                x + r * offs[j] * Math.cos(a + j * Math.PI * 2 / vert),
                y + r * offs[j] * Math.sin(a + j * Math.PI * 2 / vert)
            );
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();

        // show asteroid's collision circle
        if (SHOW_BOUNDING) {
            ctx.strokeStyle = "lime";
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2, false);
            ctx.stroke();
        }
    }

    // thrust the ship
    if (ship.thrusting && !ship.dead) {
        ship.thrust.x += SHIP_THRUST * Math.cos(ship.a) / FPS;
        ship.thrust.y -= SHIP_THRUST * Math.sin(ship.a) / FPS;

        // draw the thruster
        if (!exploding && blinkOn) {
            ctx.fillStyle = "red";
            ctx.strokeStyle = "yellow";
            ctx.lineWidth = SHIP_SIZE / 10;
            ctx.beginPath();
            ctx.moveTo( // rear left
                ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + 0.5 * Math.sin(ship.a)),
                ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - 0.5 * Math.cos(ship.a))
            );
            ctx.lineTo( // rear centre (behind the ship)
                ship.x - ship.r * 5 / 3 * Math.cos(ship.a),
                ship.y + ship.r * 5 / 3 * Math.sin(ship.a)
            );
            ctx.lineTo( // rear right
                ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - 0.5 * Math.sin(ship.a)),
                ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + 0.5 * Math.cos(ship.a))
            );
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    } else {
        // apply friction (slow the ship down when not thrusting)
        ship.thrust.x -= FRICTION * ship.thrust.x / FPS;
        ship.thrust.y -= FRICTION * ship.thrust.y / FPS;
        fxThrust.stop();
    }
    
    // draw the triangular ship
    if (!exploding) {
        if (blinkOn && !ship.dead) {
            drawShip(ship.x, ship.y, ship.a);
        }

        // handle blinking
        if (ship.blinkNum > 0) {

            // reduce the blink time
            ship.blinkTime--;

            // reduce the blink num
            if (ship.blinkTime == 0) {
                ship.blinkTime = Math.ceil(SHIP_BLINK_DUR * FPS);
                ship.blinkNum--;
            }
        }

    } else {
        // draw the explosion (concentric circles of different colours)
        ctx.fillStyle = "darkred";
        ctx.beginPath();
        ctx.arc(ship.x, ship.y, ship.r * 1.7, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(ship.x, ship.y, ship.r * 1.4, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle = "orange";
        ctx.beginPath();
        ctx.arc(ship.x, ship.y, ship.r * 1.1, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(ship.x, ship.y, ship.r * 0.8, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(ship.x, ship.y, ship.r * 0.5, 0, Math.PI * 2, false);
        ctx.fill();
    }

    // show ship's collision circle
    if (SHOW_BOUNDING) {
        ctx.strokeStyle = "lime";
        ctx.beginPath();
        ctx.arc(ship.x, ship.y, ship.r, 0, Math.PI * 2, false);
        ctx.stroke();
    }
    
    // show ship's centre dot
    if (SHOW_CENTRE_DOT) {
        ctx.fillStyle = "red";
        ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2);
    }

    // draw the lasers
    for (var i = 0; i < ship.lasers.length; i++) {

        if (ship.lasers[i].explodeTime == 0) {
            ctx.fillStyle = "salmon";
            ctx.beginPath();
            ctx.arc(ship.lasers[i].x, ship.lasers[i].y, SHIP_SIZE / 7, 0, Math.PI * 2, false);
            ctx.fill();


        } else {
            // draw the eplosion
            ctx.fillStyle = "orangered";
            ctx.beginPath();
            ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.75, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.fillStyle = "salmon";
            ctx.beginPath();
            ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.5, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.fillStyle = "pink";
            ctx.beginPath();
            ctx.arc(ship.lasers[i].x, ship.lasers[i].y, ship.r * 0.25, 0, Math.PI * 2, false);
            ctx.fill();
        }
    }

    // draw the game text
    if (textAlpha >= 0) {
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "rgba(255, 255, 255, " + textAlpha + ")";
        ctx.font = "small-caps" + TEXT_SIZE + "px Courier Neww";
        ctx.fillText(text, canv.width / 2, canv.height * 0.75);
        textAlpha -= (1.0 / TEXT_FADE_TIME / FPS);
    } else if (ship.dead) {
        // after "game over" fades, start a new game
        newGame();
    }

    // draw the lives

    var lifeColour;

    // Don't display lives if shield have not been purchased

    if (GAME_LIVES == 1) {

        for (var i = 0; i < lives; i++) { // ALLOWS LIVES TO BE VISIBLE BY ADDING 2 TO CREATE MARGIN
            lifeColour = exploding && i == lives - 1 ? "red" : "white";
            drawShip(SHIP_SIZE + i * SHIP_SIZE * 1.2, SHIP_SIZE, 0.5 * Math.PI, lifeColour);
        }

    }

    // Display correct number of lives if shields have been purchased

    if (GAME_LIVES > 1) {

        for (var i = 0; i < lives; i++) {
            lifeColour = exploding && i == lives - 1 ? "red" : "white";
            drawShip(75 + SHIP_SIZE + i * SHIP_SIZE * 1.2, SHIP_SIZE, 0.5 * Math.PI, lifeColour);
        }
        
    }


    // draw the score
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    ctx.font = (TEXT_SIZE * 0.75) + "px times new roman";
    ctx.fillText("Cerentanium collected: ✧ " + Math.round(score) +  "       ", canv.width - SHIP_SIZE / 2, SHIP_SIZE);

    // draw the high score
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    ctx.font = (TEXT_SIZE * 0.75) + "px Courier New";
    ctx.fillText("Asteroid belt: LAYER " + (level+1), canv.width / 2, SHIP_SIZE);

    // detect laser hits on asteroids
    var ax, ay, ar, lx, ly;
    for (var i = roids.length - 1; i >= 0; i--) {

        // grab the asteroid properties
        ax = roids[i].x;
        ay = roids[i].y;
        ar = roids[i].r;

        // loop over the lasers
        for (var j = ship.lasers.length - 1; j >= 0; j--) {

            // grab the laser properties
            lx = ship.lasers[j].x;
            ly = ship.lasers[j].y;

            // detect hits
            if (ship.lasers[j].explodeTime == 0 && distBetweenPoints(ax, ay, lx, ly) < ar) {

                // destroy the asteroid and activate the laser explosion
                destroyAsteroid(i);
                ship.lasers[j].explodeTime = Math.ceil(LASER_EXPLODE_DUR * FPS);
                break;
            }
        }
    }

    // check for asteroid collisions (when not exploding)
    if (!exploding) {

        // only check when not blinking
        if (ship.blinkNum == 0 && !ship.dead) {
            for (var i = 0; i < roids.length; i++) {
                if (distBetweenPoints(ship.x, ship.y, roids[i].x, roids[i].y) < ship.r + roids[i].r) {
                    explodeShip();
                    destroyAsteroid(i);

                    if (lives == 1) {

                        if (r == Math.ceil(ROID_SIZE / 2)) { // large asteroid

                            score -= (ROID_PTS_SML * extraction_coefficient * 50);
    
                            // if in negatives, change to 0
    
                            if (score < 0) {
                                score = 0;
                            }
    
                        } else if (r == Math.ceil(ROID_SIZE / 4)) { // medium asteroid
    
                            score -= (ROID_PTS_MED * extraction_coefficient * 50);
    
                            if (score < 0) {
                                score = 0;
                            }
    
                        } else { // small asteroid
    
                            score -= (ROID_PTS_LGE * extraction_coefficient * 50);
    
                            if (score < 0) {
                                score = 0;
                            }
    
                        }
                    }


                    break;
                }
            }
        }

        // rotate the ship
        ship.a += ship.rot;

        // move the ship
        ship.x += ship.thrust.x;
        ship.y += ship.thrust.y;
    } else {
        // reduce the explode time
        ship.explodeTime--;

        // reset the ship after the explosion has finished
        if (ship.explodeTime == 0) {

            lives--;

            
            if (lives == 0) {
                gameOver();
            } else {
                ship = newShip();
            }
        }
    }



    // handle edge of screen
    if (ship.x < 0 - ship.r) {
        ship.x = canv.width + ship.r;
    } else if (ship.x > canv.width + ship.r) {
        ship.x = 0 - ship.r;
    }
    if (ship.y < 0 - ship.r) {
        ship.y = canv.height + ship.r;
    } else if (ship.y > canv.height + ship.r) {
        ship.y = 0 - ship.r;
    }

    // move the lasers
    for (var i = ship.lasers.length - 1; i >= 0; i--) {
        
        // check distance travelled
        if (ship.lasers[i].dist > LASER_DIST * canv.width) {
            ship.lasers.splice(i, 1);
            continue;
        }

        // handle the explosion
        if (ship.lasers[i].explodeTime > 0) {
            ship.lasers[i].explodeTime--;

            // destroy the laser after the duration is up
            if (ship.lasers[i].explodeTime == 0) {
                ship.lasers.splice(i, 1);
                continue;
            }
        } else {
            // move the laser
            ship.lasers[i].x += ship.lasers[i].xv;
            ship.lasers[i].y += ship.lasers[i].yv;

            // calculate the distance travelled
            ship.lasers[i].dist += Math.sqrt(Math.pow(ship.lasers[i].xv, 2) + Math.pow(ship.lasers[i].yv, 2));
        }

        // handle edge of screen
        if (ship.lasers[i].x < 0) {
            ship.lasers[i].x = canv.width;
        } else if (ship.lasers[i].x > canv.width) {
            ship.lasers[i].x = 0;
        }
        if (ship.lasers[i].y < 0) {
            ship.lasers[i].y = canv.height;
        } else if (ship.lasers[i].y > canv.height) {
            ship.lasers[i].y = 0;
        }
    }

    // move the asteroids
    for (var i = 0; i < roids.length; i++) {
        roids[i].x += roids[i].xv;
        roids[i].y += roids[i].yv;

        // handle asteroid edge of screen
        if (roids[i].x < 0 - roids[i].r) {
            roids[i].x = canv.width + roids[i].r;
        } else if (roids[i].x > canv.width + roids[i].r) {
            roids[i].x = 0 - roids[i].r
        }
        if (roids[i].y < 0 - roids[i].r) {
            roids[i].y = canv.height + roids[i].r;
        } else if (roids[i].y > canv.height + roids[i].r) {
            roids[i].y = 0 - roids[i].r
        }
    }
}
/* Get total upgrades */

var totalUpgradesStr = localStorage.getItem("totalUpgrades");

if (totalUpgradesStr == null || totalUpgradesStr < 0) {
    var totalUpgrades = 0;
} else {
    var totalUpgrades = parseInt(totalUpgradesStr);
}


/* Get astrallite */

var astrallite = localStorage.getItem("as");


// Make text fade (default text, showing progress)

const target = document.getElementById('target');
const newInnerHTML = target.innerHTML
  .split(/<br>\s*/i)
  .map((text, i) => '<p style="animation-delay:' + (3000 * i) + 'ms">' + text + '</p>')
  .join(''); 

target.innerHTML = newInnerHTML;

// Allow the user to claim the AI if they have purchased every upgrade

if (totalUpgrades == 37) {

// Make text fade (new text to claim AI)

  $("#target").hide();

  const claimAI = document.getElementById('claimAI');
  const newInnerHTML1 = claimAI.innerHTML
    .split(/<br>\s*/i)
    .map((text, i) => '<p style="animation-delay:' + (3000 * i) + 'ms">' + text + '</p>')
    .join(''); 
  
  claimAI.innerHTML = newInnerHTML1;

} else {

  $("#claimAI").hide();
}

// If the player has reached 10mil astrallite, finish game, end screen

if (astrallite >= 10000000) {
  window.location.href = "congratulations.html";
}

// Calculate percentages

upgradePercentage = Math.ceil(totalUpgrades / 37 * 100);
astrallitePercentage = Math.ceil(astrallite / 10000000 * 100);

// Display progess bar percentages

$(".upgrade-percent").text(upgradePercentage + "%")
$(".astrallite-percent").text(astrallitePercentage + "%")

// Update text percentage
$("#textPercentage").text((100 - astrallitePercentage) + "%")

$('.upgrades').each(function(){
	$(this).find('.skillbar-bar').animate({
		width:(upgradePercentage  + "%")
	},2000);
});

$('.astrallite').each(function(){
	$(this).find('.skillbar-bar').animate({
		width:(astrallitePercentage  + "%")
	},2000);
});

if (totalUpgrades == 37) {
  $("#ai").show()
} else {
  $("#ai").hide()
}

function activateAI() {

  $("#ai").text("Go check out the asteroid belt 😉")
  localStorage.setItem("AUTOMATION_ON", true)

  setTimeout(function(){

    $("#ai").hide(5000)
  
  }, 3000);





}

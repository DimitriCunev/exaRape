const rp = require('request-promise');
const player = require('./player')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let localPlayer = new player
console.log('ExaRape 1.1 made by index.html');

async function init(){
    let dumps = await rp('https://raw.githubusercontent.com/DimitriCunev/ROTMG-Updated-XML/master/offsets.json');
    localPlayer.offsets = JSON.parse(dumps);
    setInterval(() => {
        localPlayer.updateHealth()
        localPlayer.updateMHealth()
        localPlayer.updateGeneral()
        //console.log(localPlayer.health,localPlayer.mhealth)
    }, 50);


    //Testing
    localPlayer.updateHealth()
    localPlayer.updateMHealth()
    localPlayer.updateGeneral()
    console.log(`If your health is not ${localPlayer.health} , this cheat is outdated.`)
    console.log(`Make sure your nexus button is set to R`)
}
rl.question("Autonexus percentage (1-100): ", function(response) {
    localPlayer.hPercentageLimit = parseInt(response)/100;
    init()

    console.log(`Started autonexus ${localPlayer.hPercentageLimit}.`)
    
});




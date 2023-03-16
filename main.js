function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
  }

let unit1 = document.querySelector("#unit-1");
let unit2 = document.querySelector("#unit-2");
let unit3 = document.querySelector("#unit-3");
let unit4 = document.querySelector("#unit-4");
let unit5 = document.querySelector("#unit-5");
let unit6 = document.querySelector("#unit-6");

let commander = document.querySelector("#commander");
let units = document.querySelector("#units");
let fraction__choise = document.querySelector("#fraction__choise");

let fraction;
let сGDIimg = ['./img/Strongarm_card.webp','./img/Liang_card.webp','./img/McNeil_card.webp','./img/Solomon_card.webp','./img/Jackson_card.webp'];
let сNODimg = ['./img/Seth_card.webp','./img/Kane_card.webp','./img/Jade_card.webp','./img/Oxanna_card.webp'];

document.querySelector("#button-random").onclick = function(){
    let uGDIimg = ['./img/GDI/CNCRiv_Riflemen.webp','./img/GDI/CNCRiv_Missile_Squad.webp','./img/GDI/CNCRiv_MG_Squad.webp','./img/GDI/CNCRiv_Jump_Jet_Troopers.webp','./img/GDI/CNCRiv_Shockwave_Troopers.webp','./img/GDI/CNCRiv_Sniper_Team.webp','./img/GDI/CNCRiv_Grenadier.webp','./img/GDI/CNCRiv_War_Dogs.webp','./img/GDI/CNCRiv_Rhino.webp','./img/GDI/CNCRiv_M.S.V..webp','./img/GDI/CNCRiv_Pitbull.webp','./img/GDI/CNCRiv_Shatterer.webp','./img/GDI/CNCRiv_Slingshot.webp','./img/GDI/CNCRiv_M.L.R.S..webp','./img/GDI/CNCRiv_Predator_Tank.webp','./img/GDI/CNCRiv_A.P.C..webp','./img/GDI/CNCRiv_Battering_Ram.webp','./img/GDI/CNCRiv_War_Dogs.webp','./img/GDI/CNCRiv_Talon.webp','./img/GDI/CNCRiv_Mohawk_Gunship.webp','./img/GDI/CNCRiv_Razorback.webp','./img/GDI/CNCRiv_Orca.webp','./img/GDI/CNCRiv_Hammerhead.webp','./img/GDI/CNCRiv_Orca_Bomber.webp','./img/GDI/CNCRiv_Wolverine.webp','./img/GDI/CNCRiv_Disruptor.webp','./img/GDI/CNCRiv_Juggernaut.webp','./img/GDI/CNCRiv_Zone_Trooper.webp','./img/GDI/CNCRiv_Kodiak.webp','./img/GDI/CNCRiv_Sandstorm.webp','./img/GDI/CNCRiv_Titan.webp','./img/GDI/CNCRiv_Mammoth_Tank.webp'];
    let uNODimg = ['./img/NOD/CNCRiv_Militant.webp', './img/NOD/CNCRiv_Laser_Squad.webp', './img/NOD/CNCRiv_Fanatic.webp', './img/NOD/CNCRiv_Scavenger.webp', './img/NOD/CNCRiv_Flame_Troopers.webp', './img/NOD/CNCRiv_Scarabs.webp','./img/NOD/CNCRiv_Chemical_Warriors.webp','./img/NOD/CNCRiv_Mutant_Marauder.webp','./img/NOD/CNCRiv_Cyberwheel.webp','./img/NOD/CNCRiv_Attack_Bikes.webp','./img/NOD/CNCRiv_Buggy.webp','./img/NOD/CNCRiv_Chem_Buggy.webp','./img/NOD/CNCRiv_Scorpion_Tank.webp','./img/NOD/CNCRiv_Tick_Tank.webp','./img/NOD/CNCRiv_Giga-Cannon.webp','./img/NOD/CNCRiv_Stealth_Tank.webp','./img/NOD/CNCRiv_Laser_Drone.webp','./img/NOD/CNCRiv_Banshee.webp','./img/NOD/CNCRiv_Venom.webp','./img/NOD/CNCRiv_Catalyst_Gunship.webp','./img/NOD/CNCRiv_Shade.webp','./img/NOD/CNCRiv_Inferno.webp','./img/NOD/CNCRiv_Phantom.webp','./img/NOD/CNCRiv_Widowmaker.webp','./img/NOD/CNCRiv_Flame_Tank.webp','./img/NOD/CNCRiv_Centurion.webp','./img/NOD/CNCRiv_Confessor.webp','./img/NOD/CNCRiv_Artillery.webp','./img/NOD/CNCRiv_Basilisk.webp','./img/NOD/CNCRiv_Rockworm.webp','./img/NOD/CNCRiv_Cyborg.webp',"./img/NOD/CNCRiv_Avatar.webp"];

    let arrIndex = [];
    for(let i = random(0,31); arrIndex.length < 6; i = random(0,31)){
      if(!arrIndex.includes(i)) {arrIndex.push(i)}
    }
    arrIndex.sort((a, b) => a - b)

    if((random(0, 1)) == 0){fraction = 'ГСБ'} 
    else{fraction = 'НОД'}

    if(fraction == 'ГСБ') {
      fraction__choise.textContent = 'ГСБ';
      commander.src = сGDIimg[random(0,4)]
    } 
    else{
      fraction__choise.textContent = 'НОД';
      commander.src = сNODimg[random(0,3)]
    }


    if(fraction == 'ГСБ') {
      unit1.src = uGDIimg[arrIndex[0]];
      unit2.src = uGDIimg[arrIndex[1]];
      unit3.src = uGDIimg[arrIndex[2]];
      unit4.src = uGDIimg[arrIndex[3]];
      unit5.src = uGDIimg[arrIndex[4]];
      unit6.src = uGDIimg[arrIndex[5]];
    } else{
      unit1.src = uNODimg[arrIndex[0]];
      unit2.src = uNODimg[arrIndex[1]];
      unit3.src = uNODimg[arrIndex[2]];
      unit4.src = uNODimg[arrIndex[3]];
      unit5.src = uNODimg[arrIndex[4]];
      unit6.src = uNODimg[arrIndex[5]];
    }
  }
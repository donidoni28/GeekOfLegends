import { perso1, perso2, perso3 } from "./perso.js"
import { boss1, boss2, boss3 } from "./bosse.js"
import { getRngObj, getBattlePhaseOrder } from "./functionRng.js"



let bosses = [boss1, boss2, boss3]
let persos = [perso1, perso2, perso3]




// let userInputP1 = prompt('entrez le nom du perso1')
// perso3.nom = userInputP1

// BATTLE PHASE
// console.log(battlePhaseBoss);
let bossCemetery = []
let persoCemetery = []

// console.log(perso1);
// console.log(perso2);
// console.log(perso3);
while(bosses.length > 0){
    let battlePhaseBoss = getRngObj(bosses).obj
    let battlePhaseOrder = getBattlePhaseOrder(battlePhaseBoss, persos)
    while (battlePhaseBoss.currentPv > 0) {
        perso1.poz = ''
        perso2.poz = ''
        perso3.poz = ''
        let userInputForPoustureP1 = +prompt(`Quel Posture doit addopter le ${perso1.role} \n1: Posture normal\n2: Posture offensive\n3: Posture Defensive`)
        // let userInputForPoustureP2 = +prompt(`Quel Posture doit addopter le ${perso2.role} \n1: Posture normal\n2: Posture offensive\n3: Posture Defensive`)
        let userInputForPoustureP3 = +prompt(`Quel Posture doit addopter le ${perso3.role} \n1: Posture normal\n2: Posture offensive\n3: Posture Defensive`)
        perso1.setPoz(userInputForPoustureP1)
        // perso2.setPoz(userInputForPoustureP2)
        perso3.setPoz(userInputForPoustureP3)
    
        let userInputForPowerP1 = +prompt(`Attaque:\n1: Coup d'epee\n2: Provocation(en develepement)\n3: passer le tour(+2 rage)`)
        // let userInputForPowerP2 = +prompt(`Attaque:\n1: soigner un membre de l'equipe(cout mana: 1) \n2: soigner mon equipe(en developement) \n3: passer le tour(+7 mana)`)
        let userInputForPowerP3 = +prompt(`Attaque:\n1: tirer une fleche(cout en flech:1) \n2:tirer deux flech(cout en flech:2) \n3: passer le tour(+6 flech)`)
    
        for (let i = 0; i < battlePhaseOrder.length; i++) {
            if (battlePhaseOrder[i].type === 'boss') {
                let perso = getRngObj(persos).obj
                battlePhaseOrder[i].setBossAttaque(perso)
                console.log(`${battlePhaseBoss.nom} Attaque ${perso.role} il recoit ${battlePhaseBoss.pa} de degat et il lui rest ${perso.currentPv}`);
            } else {
                if (battlePhaseOrder[i].role === 'guerrier') {
                    // console.log('heros:',battlePhaseOrder[i],'\nattaque',userInputForPowerP1,'\nboss:',battlePhaseBoss);
                    battlePhaseOrder[i].power(userInputForPowerP1,battlePhaseBoss)
                    console.log(`${battlePhaseOrder[i].role} Attaque ${battlePhaseBoss.nom} il recoit ${battlePhaseOrder[i].basePa} de degat et il lui rest ${battlePhaseBoss.currentPv}`);
    
    
    
    
                }
                // if (battlePhaseOrder[i].role === 'mage') {
                // //     console.log('heros:',battlePhaseOrder[i],'\nattaque',userInputForPowerP2,'\nboss:',battlePhaseBoss);
                //     // battlePhaseOrder[i].power(userInputForPowerP2,battlePhaseBoss)
                // console.log(`${battlePhaseOrder[i].role} Attaque ${battlePhaseBoss.nom} il recoit ${battlePhaseOrder[i].basePa} de degat et il lui rest ${battlePhaseBoss.currentPv}`);
    
    
    
    
    
                // }
                if (battlePhaseOrder[i].role === 'archer') {
                    // console.log('heros:',battlePhaseOrder[i],'\nattaque',userInputForPowerP3,'\nboss:',battlePhaseBoss);
                    battlePhaseOrder[i].power(userInputForPowerP3,battlePhaseBoss)
                    console.log(`${battlePhaseOrder[i].role} Attaque ${battlePhaseBoss.nom} il recoit ${battlePhaseOrder[i].basePa} de degat et il lui rest ${battlePhaseBoss.currentPv}`);
    
    
    
    
    
    
                }
            }
        }
    }
    
    if(battlePhaseBoss.currentPv <= 0){
        console.log(`${battlePhaseBoss} est mort`);
        for(let i = 0; i< bosses.length ; i++){
            if(bosses[i].nom === battlePhaseBoss.nom){
                bosses.splice(bosses.indexOf(bosses[i]),1)
            }
        }
    }
}


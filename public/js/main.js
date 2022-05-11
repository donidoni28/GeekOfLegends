import { perso1, perso2, perso3 } from "./perso.js"
import { boss1, boss2, boss3 } from "./bosse.js"

let bosses = [boss1,boss2,boss3]

let userInputP1 = prompt('entrez le nom du perso1')
perso3.nom = userInputP1
console.log(perso3);
let selectedBoss = Math.floor(Math.random() * (bosses.length - 1 +1))+1

// PHASE
// while(){

// }
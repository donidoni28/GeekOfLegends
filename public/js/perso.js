class Heros {
    // hp: point de vie pa: point d'attaque,
    constructor(nom,hp,pa,poz){
        this.nom = nom
        this.hp = hp
        this.pa = pa
        this.poz = 'normal'
    }
    setDefance(){
        this.poz = 'defance'
    }
}
class Guerrier extends Heros {
    constructor(nom,hp,pa,poz){
        super(nom,hp,pa,poz)
        this.pr = null
    }
    setAttaque(boss){
        this.poz = 'attaques'
        boss.currentPv -= this.pa
    }
}
class Mage extends Heros {
    constructor(nom,hp,pa,poz){
        super(nom,hp,pa,poz)
        this.mp = null 
    }
    setAttaque(boss){
        this.poz = 'attaques'
        boss.currentPv -= this.pa
    }
}
class Archer extends Heros {
    constructor(nom,hp,pa,poz){
        super(nom,hp,pa,poz)
        this.fleche = null
    }
    setAttaque(boss){
        this.poz = 'attaques'
        boss.currentPv -= this.pa
    }
}
export let perso1 = new Guerrier('',10000,15)
export let perso2 = new Mage('',10000,15)
export let perso3 = new Archer('',10000,15)

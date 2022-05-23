class Boss {
    constructor(nom,basePv,pa){
        this.nom = nom
        this.basePv = basePv
        this.pa = pa
        this.currentPv = this.basePv
        this.type = 'boss'
    }
    setBossAttaque(perso){
        perso.currentPv -= this.pa
    }
}

export let boss1 = new Boss('Sauron',400,60)
export let boss2 = new Boss('Chronos',400,60)
export let boss3 = new Boss('Lilith',400,60)
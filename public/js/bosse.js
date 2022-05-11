class Boss {
    constructor(nom,totalPv,pa){
        this.nom = nom
        this.totalPv = totalPv
        this.pa = pa
        this.currentPv = this.totalPv
    }
}

export let boss1 = new Boss('Sauron',400,60)
export let boss2 = new Boss('Chronos',400,60)
export let boss3 = new Boss('Lilith',400,60)
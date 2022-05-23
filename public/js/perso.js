import { getRngObj } from "./functionRng.js"
class Heros {
    // pv: point de vie pa: point d'attaque,
    constructor(nom, basePv, basePa, poz, setDefance, setAttaque, setNormal) {
        this.nom = nom
        this.basePv = basePv
        this.basePa = basePa
        this.poz = ''
        this.type = 'perso'
    }
    setPoz = number => {
        switch (number) {
            case 1:
                this.poz = 'normal'
                break;
            case 2:
                this.poz = 'atk'
                this.basePa *= 1.4
                this.basePv *= 0.75
                break;
            case 3:
                this.poz = 'def'
                this.basePa *= 0.5
                this.basePv *= 2.5 
                break;
            default:
                break;
        }
    }
}
class Guerrier extends Heros {
    constructor(nom, basePv, basePa, poz) {
        super(nom, basePv, basePa, poz)
        this.currentPv = basePv
        this.currentPa = basePa
        this.pr = 0
        this.role = 'guerrier'
    }
    power(number, boss) {
        switch (number) {
            case 1:
                boss.currentPv -= this.basePa
                break;
            case 2:
                break;
            case 3:
                this.pr += 2
                if (this.pr > 4) {
                    this.pr = 4
                }
                break;
            default:
                break;
        }
    }
}
class Mage extends Heros {
    constructor(nom, basePv, baseMana, basePa, poz) {
        super(nom, basePv, basePa, poz)
        this.currentPv = basePv
        this.baseMana = getRngObj(baseMana).obj
        this.currentPa = basePa
        this.mana = this.baseMana
        this.role = 'mage'
    }
    power(number, perso, persos) {
        switch (number) {
            case 1:
                let heal = ((perso.basePv * this.pa) / 100)
                perso.currentPv += heal
                if (perso.currentPv > perso.basePv) {
                    perso.currentPv = perso.basePv
                    this.mana -= 1
                    break
                }
                this.mana--
                break
            case 2:
                let grpHeal = ((perso.basePv * (this.pa - (this.pa / 100 * 30))) / 100)
                break;
            case 3:
                this.mana += 7
                if (this.mana > this.baseMana) {
                    this.mana = this.baseMana
                    break
                }
                break;
            default:
                break;
        }
    }
}
class Archer extends Heros {
    constructor(nom, basePv, baseBullet, basePa, poz) {
        super(nom, basePv, basePa, poz)
        this.currentPv = basePv
        this.baseBullet = getRngObj(baseBullet).obj
        this.currentPa = basePa 
        this.bullet = this.baseBullet
        this.role = 'archer'
    }
    power(number, boss) {
        switch (number) {
            case 1:
                boss.currentPv -= this.basePa
                this.bullet--
                break;
            case 2:
                boss.currentPv -= (this.basePa * 2) 
                this.bullet -= 2
                break;
            case 3:
                this.bullet += 7
                if (this.bullet > this.baseBullet) {
                    this.mana = this.baseBullet
                    break
                }
                break;
            default:
                break;
        }
    }
}
export let perso1 = new Guerrier('', 10000, 15)
export let perso2 = new Mage('', 10000, [7, 9, 11], 15)
export let perso3 = new Archer('', 10000, [7, 8, 9, 10, 11], 15)

// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(thedamage) {
        this.health -= thedamage
    }
}
// const anotherSoldier = new Soldier(100, 100);
// console.log(anotherSoldier)


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    attack() {
        return this.strength;
    } 
    receiveDamage(thedamage){        
        this.health -= thedamage;
        if (this.health > 0) {
            return `${this.name} has received ${thedamage} points of damage`;

        } else if (this.health <= 0) {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }  
}
// const anotherViking = new Viking(200, 200, 200)
// console.log(anotherViking)



// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super (health, strength)
    }
    receiveDamage(thedamage) {
        this.health -= thedamage;
        if (this.health > 0) {
            return `A Saxon has received ${thedamage} points of damage`
        } else if (this.health <= 0) {
            return `A Saxon has died in combat`
        }
    }
}
// const anotherSaxon = new Saxon(300, 300)
// console.log(anotherSaxon)




// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(vikingObj) {
        this.vikingArmy.push(vikingObj)
    }
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj)
    }
    vikingAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingSoldier = this.vikingArmy[randomVikingIndex];
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const saxonSoldier = this.saxonArmy[randomSaxonIndex];
        const attackStrength = vikingSoldier.attack()
        const result = saxonSoldier.receiveDamage(attackStrength)

        if(saxonSoldier.health <= 0) {
            this.saxonArmy.splice(randomSaxonIndex,1)
        }
        return result
    }
    saxonAttack(){
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const vikingSoldier = this.vikingArmy[randomVikingIndex];
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const saxonSoldier = this.saxonArmy[randomSaxonIndex];
        const attackStrength = saxonSoldier.attack()
        const result = vikingSoldier.receiveDamage(attackStrength)

        if(vikingSoldier.health <= 0) {
            this.vikingArmy.splice(randomVikingIndex,1)
        }
        return result
    }

    showStatus(){
            if(this.saxonArmy.length <= 0) {
                return "Vikings have won the war of the century!"
            }
            else if(this.vikingArmy.length <= 0) {
                return "Saxons have fought for their lives and survived another day..."
            }
            else { 
                return "Vikings and Saxons are still in the thick of battle."
            }
        }
}

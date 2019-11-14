class Unit {
  constructor(name) {
    this.name = name
    this.hp = 100
    this.atk = 10
    this.mag = 5
    this.job = "Squire"
    this.alive = true
    this.equipment = {
    rHand: null,
    lHand: null,
    helmet: null,
    armor: null,
    accessory: null,
    }
}

  equipItem(item) {
    if (item.type != 'hand') {
      this.equipment[item.type] = item
    } else {
      if (item.dual) {
        this.equipment.rHand = item
        this.equipment.lHand = item
        return `${item.name} has been equipped in both of your hands! Lucky!`
      }
      if (!this.equipment.rHand) {
        this.equipment.rHand = item
    } else {
        this.equipment.lHand = item
    }
  }
    return  `${item.name} has been equipped, Ready for Battle!`
  }

  rHand() {
    return this.equipment.rHand
  }

  attack(target) {
    if (!target.alive) return `${target.name} has already perished!`
    target.hp -= this.atk
    if (target.hp <= 0) {
      target.alive = false
      return `${target.name} has fallen!`
    }
    return `${this.name} attacked ${target.name}!`
  }
}

class Squire extends Unit { //-"Extends" lets the class know what it will be inheriting from.
  constructor(name) {
    super(name) //-"Super" calls the parent class.
    this.job = "Squire"
  }

  attack() {

  }
}

class Knight extends Unit {
  constructor(name) {
    super(name)
    this.atk = 10
    this.job = "Knight"
  }
}

class Mage extends Unit {
  constructor(name) {
    super(name)
    this.hp -= 25
    this.mag += 25
    this.job = "Mage"
  }

  castSpell(target) {
      if (!target.alive) return `${target.name} has already perished!`
      target.hp -= this.mag
      if (target.hp <= 0) {
        target.alive = false
        return `${target.name} has fallen!`
      }
      return `${this.name} casted boiling Fire on ${target.name}!`
  }
}

let james = new Knight('James')
let joker = new Squire('Joker')
let robin = new Mage('Robin')
//Truthy/Falsy
//The only thing that would evaluate to false would be undefined and null.

class Equipment {
constructor(name, type, dual = false){
this.name = name
  this.type = type
  this.hp = 0
  this.atk = 0
  this.def = 0
  this.dual = dual
  }
}

let excalibur = new Equipment('Excalibur', 'hand', true)
let broadsword = new Equipment('Broadsword', 'hand')
let shield = new Equipment('Summons', 'hand')
let chainMail = new Equipment('Chain Mail', 'armor')
let helm = new Equipment('Helmet', 'helmet')
let accessory = new Equipment('Green shorts', 'accessory')

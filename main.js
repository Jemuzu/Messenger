/* A user needs to be able to send messages.
// Messages need to be stored with the user they belong to.
// Needs to be able to read individual messagees

// Classes start with a capital letter
// 95% of the time, class are singual in name
// user.inbox => that person's Messages
user.sendMessage('Ryan' , 'Heybb */

const Conversations = []

class Conversation {
  constructor() {
    this.id = Conversations.length + 1
    this.messages = []
    this.users = []
    Conversations.push(this)
  }

add(user){
  this.users.push(user)
  }
}

class User {
  constructor(name) {
    this.name = name
    this.inbox = []
    this.blockedUsers = []
  }

sendMessage(convo, content) {
  //if (convo.blockedUsers.includes(this)) return 'Omae wa mou'
  let msg = new Message(convo, content)
  convo.inbox.push(msg)
}

readMessage(i) {
this.inbox[i].seen = true
this.inbox[i].seenAt = new Date()
return this.inbox[i].content
/*var d = new Date();
d.setTime(mm/dd/yy);*/
}

viewUnread() {
  let unread = []
  for (msg of this.inbox) { //block scoping// zzzzzzzzzz
    if (msg.seen === false) {
      unread.push(msg)
      console.log(msg.content)
      }
    }
      return unread
  }
}

class Message {
  constructor(content) { // Gives us the keyword new
    this.receiver = convo
    this.content = content
    this.seen = false
    this.seenAt = []
  }
  viewRead() {
    let read = []
    for (let msg of this.inbox) { //block scoping// zzzzzzzzzz
      if (msg.seen === true) {
        read.push(msg)
        console.log(msg.content)
      }
}
    return read
  }
  block(user) {
    this.blockedUsers.push(User)
  }
}

let user1 = new User('James')
let user2 = new User('Joker')
// any object based on a class is called an instance
// An instance represents one object based on the class name
// Constructor arguments go in the pa

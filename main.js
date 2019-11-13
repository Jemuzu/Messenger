// A user needs to be able to send messages.
// Messages need to be stored with the user they belong to.
// Needs to be able to read individual messagees

// Classes start with a capital letter
// 95% of the time, class are singual in name
// user.inbox => that person's Messages
//user.sendMessage('Ryan' , 'Heybb')

class User {
  constructor(name) {
    this.name = name
    this.inbox = []
   }

sendMessage(receiver, content) {
  let msg = new Message(receiver, content)
  receiver.inbox.push(msg)
  return `Your message to ${receiver.name}, has been sent`
}

readMessage(i) {
  return this.inbox[i].content
  }
}

class Message {
  constructor(reciever, content) { // Gives us the keyword new
    this.receiver = receiver
    this.content = content
  }
}




// any object based on a class is called an instance
// An instance represents one object based on the class name
// Constructor arguments go in the pa

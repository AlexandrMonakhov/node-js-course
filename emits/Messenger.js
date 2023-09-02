import { EventEmitter } from 'node:events';

class Messenger extends EventEmitter {
  sendMessage(username, message) {
    this.emit('message', { username, message });
  }

  receiveMessage() {
    this.on('message', ({ username, message }) => {
      console.log(`${username} send a message: ${message}`);
    });
  }

  emit(name, ...args) {
    super.emit(name, ...args);
  }
}

export { Messenger };

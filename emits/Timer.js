import { EventEmitter } from 'node:events';

class Timer extends EventEmitter {
  start(ms) {
    let tick = 1;

    this.ticker = setInterval(() => {
      this.emit('start', tick);

      tick++;
    }, 1000);

    setTimeout(() => {
      clearInterval(this.ticker);

      this.emit('stop');
    }, ms);
  }

  emit(name, ...args) {
    super.emit(name, ...args);
  }
}

export { Timer };

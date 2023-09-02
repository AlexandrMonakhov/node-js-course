import { Timer } from './emits/Timer.js';
import { Messenger } from './emits/Messenger.js';

const messenger = new Messenger();

messenger.receiveMessage();
messenger.sendMessage('Frank Sinatra', 'Fly me to the moon');
messenger.sendMessage('Kaye Ballard', 'Fill my heart with song');

console.log('\n', '______________', '\n');

const timer = new Timer();

timer.on('start', tickCount => {
  console.log(`Tick ${tickCount}`);
});

timer.on('stop', () => {
  console.log('timer stopped');
});

timer.start(5000);

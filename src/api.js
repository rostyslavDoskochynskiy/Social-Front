import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:4000');

export const subscribeToTimer = cb => {
    socket.on('welcome', msg => {
        console.log(msg);
    })
}
    // socket.on('timer', timestamp => cb(null, timestamp));
    // socket.emit('subscribeToTimer', 1000);


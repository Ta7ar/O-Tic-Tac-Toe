import io from 'socket.io-client';

const port = "/"; //need to change it before deployment
const socket = io(port);
export default socket;
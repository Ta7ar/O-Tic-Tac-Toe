import io from 'socket.io-client';

const port = process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:8000'; //need to change it before deployment
const socket = io(port);
export default socket;
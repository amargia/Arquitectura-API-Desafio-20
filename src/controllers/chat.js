import { list, save } from '../services/chat.js';
import '../connection/connection.js';

const getChat = async () => {
    return await list();
}

const sendMessage = async (message) => {
    return await save(message);
}

export { getChat, sendMessage };
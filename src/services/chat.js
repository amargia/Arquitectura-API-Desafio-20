import { mensajesDao } from "../contenedores/daos/index.js";
import '../connection/connection.js';

const list = async () => {
    return await mensajesDao.list();
}

const save = async (mensaje) => {
    return await mensajesDao.save(mensaje);
}

export { list, save };
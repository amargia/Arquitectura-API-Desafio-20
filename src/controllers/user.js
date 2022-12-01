import { getUser } from "../services/users.js";

const getUsuario = async (req, res) => {
    const user = await getUser(req.user._id);
    res.render('usuario', { user });
}

export { getUsuario };
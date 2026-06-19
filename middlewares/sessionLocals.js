
const setSessionLocals = (req, res, next) => {
    res.locals.usuarioLogueado = req.session.usuario || null;
    next();
  };


module.exports = setSessionLocals; 
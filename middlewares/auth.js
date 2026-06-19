const auth = {
  isLoggedIn: (req, res, next) => {
    if (!req.session.usuario) {
      return res.redirect("/login");
    }

    next();
  },

  isAdmin: (req, res, next) => {
    if (!req.session.usuario) {
      return res.redirect("/login");
    }
    if (req.session.usuario.rol !== "admin") {
      return res.redirect("/");
    }
    next();
  },
  isGuest: (req, res, next) => {
    if (req.session.usuario) {
      return res.redirect("/");
    }
    next();
  },
};

module.exports = auth;

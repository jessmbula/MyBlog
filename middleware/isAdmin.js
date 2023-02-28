const isAdmin = (req, res, next) => {
    console.log(req.user, "testttt")

    if (req.user && req.user.isadmin) {
      return next();
    }
    return res.status(401).send({ message: 'Admin Token is not valid.' });
  };

  module.exports=isAdmin
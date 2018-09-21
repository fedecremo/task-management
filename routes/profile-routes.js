const router = require('express').Router();

const authCheck = (req, res, next) => {
  if(!req.user){
    //the user has not logged in yet
    res.redirect('/auth/login');
  } else {
    //the user has logged in
    next();
}

router.get('/', authCheck, (req, res) => {
  res.render('profile', {user: req.user});
});

module.exports = router;

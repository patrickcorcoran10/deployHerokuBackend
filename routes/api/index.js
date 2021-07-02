const router = require('express').Router();
const carRoutes = require('./travellerRoutes');


router.use('/cars', carRoutes);


module.exports = router;
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

//A pergatory where users go, when they try a route that doesnt exist
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
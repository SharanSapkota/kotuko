const {Router} = require('express');

const router   = Router()

router.get('/', (req, res) => {
    console.log('This is the test route')
})

module.exports = router;
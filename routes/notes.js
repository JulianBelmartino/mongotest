const express = require('express');
const router = express.Router();


router.get('/', (req,res) => {
    console.log('Get AllNotes')
    res.send('Notes route')
});

module.exports = router;
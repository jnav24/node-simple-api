const express = require('express');
const members = require('./models/members');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(members);
});

router.get('/:id', (req, res) => {
    const index = members.findIndex((member) => Number(req.params.id) === Number(member.id));

    if (index > -1) {
        return res.status(200).json({
            data: members[index],
            msg: '',
        });
    }

    res.status(400).json({
        data: {},
        msg: `Member is not found`,
    });
});

module.exports = router;
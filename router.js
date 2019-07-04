const express = require('express');
const members = require('./models/members');
const router = express.Router();
const uuid = require('uuid');

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

router.post('/', (req, res) => {
    // res.send(req.body);
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active',
    };

    members.push(newMember);
    // res.json(members);
    res.redirect('/');
});

router.put('/:id', (req, res) => {
    const index = members.findIndex((member) => Number(req.params.id) === Number(member.id));

    if (index > -1) {
        const acceptedParams = ['name', 'email'];
        const updatedMember = {};

        for (const param in acceptedParams) {
            if (typeof req.body[acceptedParams[param]] !== 'undefined') {
                updatedMember[acceptedParams[param]] = req.body[acceptedParams[param]];
            }
        }

        members[index] = Object.assign({}, members[index], updatedMember);
        return res.status(200).json({
            data: members[index],
            msg: 'Member has been updated successfully',
        });
    }

    res.status(400).json({
        data: {},
        msg: `Member is not found`,
    });
});

router.delete('/:id', (req, res) => {
    return res.status(200).json({
        data: members.filter((member) => member.id !== Number(req.params.id)),
        msg: '',
    });
});

module.exports = router;
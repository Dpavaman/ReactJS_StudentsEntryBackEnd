const express = require('express');
const { model } = require('mongoose');
const User = require("../models/index")
const router = express.Router();

router.get("/", async (req, res) => {
    await User.find({}, (err, data) => {
        res.json(data);
    })
})


router.get("/:id", async (req, res) => {
    await User.findById(req.params.id, (err, data) => {
        res.send(data)
    })
})

router.delete("/:id", async (req, res) => {
    await User.findOneAndDelete(req.params.id);
    res.json({
        message: "Deletion Successful!"
    })
})

router.post("/", async (req, res) => {
    let user = new User({
        name: req.body.name,
        email: req.body.email,
        college: req.body.college,
        branch: req.body.branch,
        cgpa: req.body.cgpa,
        batch: req.body.batch,
    })

    user.save(() => {
        res.json(user);
    })
})

router.put("/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        message: "Updated Successfully",
    })
})

module.exports = router
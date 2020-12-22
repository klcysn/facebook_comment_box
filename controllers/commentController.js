const comment = require("../models/comment");

exports.postMessage = async (req, res) => {
    const {user, message} = req.body
    const comment = new Comment({
        user: user,
        message: message,
    });
    try {
       await comment.save(comment)
        res.send("message was send")
    } catch (err) {
        return res.status(400).json({errors:[{message: err.message}]})
    }
}

exports.getMessage = async (req, res) =>{
    try {
        const messages = await comment.find({})
        res.send(messages)
    } catch (err) {
        return res.status(400).json({errors:[{message: err.message}]})
    }
}

exports.updateMessage = async (req, res) =>{
    try {
        await comment.findOneAndUpdate({_id: req.body.id}, {...req.body, date: Date.now()}, {runValidators: true})
        next()
    } catch (error) {
        return res.status(400).json({errors:[{message: err.message}]})
    }
}
exports.deleteMessage = async (req, res, next) =>{
    try {
        await comment.findOneAndDelete({_id: req.params.id})
        next()
    } catch (error) {
        return res.status(400).json({errors:[{message: err.message}]})
    }
}
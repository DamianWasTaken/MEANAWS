const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    }
    // id: {
    //     type: mongoose.Types.ObjectId,
    //     required: true,
    // }
})

const Content = mongoose.model('Content', ContentSchema);

module.exports = { Content }
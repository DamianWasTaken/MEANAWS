// file will handle connection of project to mongo db

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/content',  {useNewUrlParser:true}).then(()=>{
    console.log("connected to mongodb")
}).catch((e)=>{
    console.log("error connecting to mongo");
    console.log(e);
})

// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};
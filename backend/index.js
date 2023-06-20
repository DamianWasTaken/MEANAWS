const path = require('path');
const express = require('express');
const app = express()
const {csp} = require('express-csp-header');
// const buildPath = path.join(__dirname, "../frontend/dist/frontend")


const {mongoose} = require('./db/mongoose')


const bodyParser = require('body-parser')

app.use('/', express.static("../frontend/dist"))


//load modultes
const {Content} = require('./db/models/content.model')


app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy',"default-src 'self' ./favicon.ico");
    next();
});

app.use(bodyParser.json());

// adding headers (HOC or whatever )
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

//routes
//send content
app.get('/Content', (req, res) =>{
    //send all conent
    Content.find().then((content) => {
        res.send(content);
    });
})

app.post('/Content', (req, res)=>{
    //create and return content
    let title = req.body.title;

    let newContent = new Content({title});
    newContent.save().then((content) =>{
        res.send(content);
    })

})

app.patch('/Content/:id', (req, res)=>{
    //update content id and return content
})
app.delete('/Content/:id', (req, res)=>{
    //delete content id 
})



//make server listen
app.listen(3000, ()=>{
    console.log("the server is listining on port 3000");
})

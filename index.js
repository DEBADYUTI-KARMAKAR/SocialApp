const express = require('express');
const format = require('date-format');
const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Hello World</h1>');
})


app.get('/api/v1/instagram',(req,res)=>{
    const instaSocial = {
        username: 'debadyutitech',
        followers: 550,
        following: 100,
        date: format.asString('dd-MM-yyyy', new Date())
    };

    res.status(200).json(instaSocial)
})
app.get('/api/v1/facebook',(req,res)=>{
    const facebookSocial = {
        username: 'debadyutitech',
        followers: 540,
        following: 100,
        date: format.asString('dd-MM-yyyy', new Date())
    };

    res.status(200).json(facebookSocial)
})
app.get('/api/v1/linkedin',(req,res)=>{
    const linkedinSocial = {
        username: 'debadyutitech',
        followers: 100,
        following: 200,
        date:  format.asString('dd-MM-yyyy hh:mm:ss', new Date())
    };

    res.status(200).json(linkedinSocial)
})
app.get('/api/v1/:token',(req,res)=>{
    res.status(200).json({
        token: req.params.token,
        date: format.asString('yyyy-MM-dd hh:mm:ss', new Date())
    });
}
)
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));


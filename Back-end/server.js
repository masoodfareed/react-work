const { response } = require('express');
var express = require('express');
const cors = require('cors');
const {sequelize} = require('./lib/db')

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
var port = 3001;
sequelize.sync().then(() => 
{
    console.log('Connecting')
});
const {Student} = require('./lib/models.js');


app.listen(port , function()
{
    console.log("Server is Listening on Port:" + port);
})

var books = 
[
    {
        "id" : 001,
        "title" : "C-sharp",
        "author" : "Mark"
    },
    {
        "id" : 002,
        "title" : "HTML5",
        "author" : "Dom"
    },
    ,
    {
        "id" : 003,
        "title" : "Python",
        "author" : "Zek"
    },
    {
        "id" : 004,
        "title" : "Django",
        "author" : "Zek"
    }
]

app.get('/' , function(request , response)
{
    response.send('Hello World');
})


app.get('/Students' , async function(request , response)
{
    console.log(1)
    response.json(await Student.findAll({}));
})

app.post('/Students' , async function(request , response)
{
    console.log(request.body)
    var student = 
    {
        Name : request.body.Name,
        Email : request.body.Email,
        createdAt : Date.now(),
        updatedAt : Date.now()
    }
    await Student.create(student).then(data => {
        response.json(data)
    });
})

app.delete('/Students/:id' , async function(request , response)
{
    var idOfStudent = request.params.id;
    await Student.destroy({where : {Id : idOfStudent}}).then(data => 
        {
            response.json(data)
        })
})

app.get('/Students/:id' , async function(request , response)
{
    await Student.findByPk(request.params.id).then(data => 
        {
            response.json(data)
        });
})

app.put('/Students/:id' , async function(request , response)
{
    console.log(request.body)
    await Student.update(request.body , { where : {Id : request.params.id}})
    .then(data => {
        response.json(data);
    })
})




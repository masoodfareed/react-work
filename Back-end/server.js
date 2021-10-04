const { response } = require('express');
var express = require('express');
const {sequelize} = require('./lib/db')
var Student = require('./lib/models.js')
var app = express();

var port = 3000;
sequelize.sync().then(() => 
{
    console.log('Connecting')
});


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

app.get('/books' , function(request , response)
{
    request.query.author;
    var filteredBooks = [];
    if(request.query.author)
   {
     books.forEach(element => {
        if(element.author == request.query.author && element.title == request.query.title) 
        {
            filteredBooks.push(element);
        }
    });
    response.send(filteredBooks)
   }
   else
   {
       response.send(books)
   }
})

app.get('/books/:id' , function(request , response)
{
    
    books.forEach(element => {
        if(element.id == request.params.id) 
        {
            response.json(element)
        }
    });
})

app.get('/Students' , function(request , response)
{
    response.send(Student.findAll({}));
})




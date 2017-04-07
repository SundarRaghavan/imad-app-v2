var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'article-one' :{
    title: 'Article One | Sundar Raghavan',
    heading: 'Article One',
    date: 'Apr 7,2017',
    content:`
    <p>
             Content of my First Article.Content of my First Article.Content of my First Article.
             Content of my First Article.Content of my First Article.Content of my First Article.
             </p>
             <p>
             Content of my First Article.Content of my First Article.Content of my First Article.
             Content of my First Article.Content of my First Article.Content of my First Article.
             </p>
             <p>
             Content of my First Article.Content of my First Article.Content of my First Article.
             Content of my First Article.Content of my First Article.Content of my First Article.
             </p>`
},
'article-two' :{
    title: 'Article Two | Sundar Raghavan',
    heading: 'Article Two',
    date: 'Apr 8,2017',
    content:`
    <p>
             Content of my Second Article.Content of my Second Article.Content of my Second Article.
             Content of my Second Article.Content of my Second Article.Content of my Second Article.
             </p>`
             
},
'article-three' :{
    title: 'Article Three | Sundar Raghavan',
    heading: 'Article Three',
    date: 'Apr 8,2017',
    content:`
    <p>
             Content of my Third Article.Content of my Third Article.Content of my Third Article.
             Content of my Third Article.Content of my Third Article.Content of my Third Article.
             </p>`
}
};
function createTemplate (data){
var title= data.title;
var date= data.date;
var heading= data.heading;
var content= data.content;

var htmlTemplate =`
<html>
    <head>
        <title>
            ${title}
            </title>
            <meta name="viewpoort" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
            
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
          ${content}
        </div>
        </div>
        </body>
</html>
`;
return htmlTemplate;
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req, res){
    //articleName == article-one
    //articles[articleNmae] == {} content object of article one
    var articleName =req.params.articleName;
    res.send(createTemplate(articles[articleName])); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

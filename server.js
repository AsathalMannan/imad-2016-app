var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 'article-one' : { 
  title: 'article One - Ajmal Hussain',
  heading: 'Article One',
  date: 'Oct 11, 2016',
  content: `<p>This is the content of my first article.
  This is the content of my first article.
  This is the content of my first article.
  This is the content of my first article.
  This is the content of my first article.
  This is the content of my first article.
  This is the content of my first article.  </p>`},

 'article-two' : { 
  title: 'article Two - Ajmal Hussain',
  heading: 'Article Two',
  date: 'Oct 11, 2016',
  content: `<p>This is the content of my first article.
  This is the content of my second article.
  This is the content of my second article.
  This is the content of my second article.
  This is the content of my second article.
  This is the content of my second article.
  This is the content of my secondt article.  </p>`},

 'article-three' : { 
  title: 'article Three - Ajmal Hussain',
  heading: 'Article Three',
  date: 'Oct 11, 2016',
  content: `<p>This is the content of my first article.
  This is the content of my third article.
  This is the content of my third article.
  This is the content of my third article.
  This is the content of my third article.
  This is the content of my third article.
  This is the content of my third article.  </p>`},

};

function createTemplate (data){
  var title = data.title;
  var date = data.date;
  var heading = data.heading;
  var content = data.content;
  var htmlTemplate = `
    <html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
            <a href="/article-one">1</a>
            <a href="/article-two">2</a>
            <a href="/article-three">3</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div class="date">${date}</div>
        <div>
            <p>${content}</p>
        </div>
        </div>
    </body>
    <html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

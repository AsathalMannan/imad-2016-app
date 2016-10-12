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
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        
        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
        
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="container">
         <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">

              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <a class="navbar-brand" href="/">Home</a>
              <ul class="nav navbar-nav">
              <li><a href="/article-one">Article One</a></li>
              <li><a href="/article-two">Article Two</a></li>
              <li><a href="/article-three">Article Three</a></li>
              </ul>
              </div>
            </div></div>
            </nav>
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

app.get('/ui/profile.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.jpeg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

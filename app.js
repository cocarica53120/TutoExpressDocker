const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const port = process.env.PORT || 3000;

router.get('/',function(req,res){
  console.log('send index.html');
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
  console.log('send about.html');
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.get('/sitemap',function(req,res){
  console.log('send sitemap.html');
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);

app.listen(port,() => {
  console.log(`Server running at port `+port);
});


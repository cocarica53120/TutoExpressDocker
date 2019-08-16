const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const util = require('util');

const port = process.env.PORT || 3000;

router.get('/',function(req,res){
  console.log('recv index.html');
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about',function(req,res){
//  console.log('req', util.inspect(req));
  console.log('recv GET about');
  res.sendFile(path.join(__dirname+'/about.html'));
});

router.post('/about', function (req, res) {
  const id = req.param('id');
  const name = req.param('name');
  const str = `recv POST about. id=${id}, name=${name}`;
  console.log(str);
  res.send(`POST request to the about with params received: ${str}.`);
});


router.get('/sitemap',function(req,res){
  console.log('recv sitemap.html');
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);

app.listen(port,() => {
  console.log(`Server running at port `+port);
});


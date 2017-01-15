var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: '/tmp/uploads/' })

const PORT = process.env.PORT || 8080;

var app = express()
app.use(express.static('public'))

app.post('/file-size', upload.single('file'), function (req, res, next) {
  res.json({ size: req.file.size });
});

app.listen(PORT, function () {
  console.log('filemeta app listening on port '+PORT+'!')
});
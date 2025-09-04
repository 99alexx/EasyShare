import express from "express";
import path from "path";
import multer from "multer";


//OBS MÅSTE VARA MED I FORM!!!!!!!!!!!!!!!!!!!!!!
//<form action="/profile" method="post" enctype="multipart/form-data">

const app = express();
const port = 3000;
//const upload = multer({dest: 'upload/'});
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '/tmp/uploads');
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.originalname + '-' +uniqueSuffix);
    }
});
const upload = multer({ storage: storage});

//app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


//Returns to client
app.get('/', (req, res) => {
    res.send('Hello world');
});


//Uploads the file
app.post('/test.html', upload.single('uploadFile'), function (req, res, next){
    //req.file //|| req.file is the `uploadFile` file
    console.log("INNE");
    console.log(req.file);


});


//Posts to server from client
app.post('/', (req, res) => {
    res.send("Responding to POST");
});






app.listen(port, () =>{
    console.log("server lyssnar på port:" + port);
});

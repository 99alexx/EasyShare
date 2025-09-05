import express from "express";
import path from "path";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import cookieParser from "cookie-parser"; 

//OBS MÅSTE VARA MED I FORM!!!!!!!!!!!!!!!!!!!!!!
//<form action="/profile" method="post" enctype="multipart/form-data">

const app = express();
const port = 3000;
const FILES_DIR = path.join("C:", "tmp", "uploads");

//app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
app.use(cookieParser());

//Returns to client
app.get("/", (req, res) => {
  res.cookie('name', 'filename').send('cookie set');
});

//Endpoint for downloading a file (prototype)
app.get("/download", (req, res) => {
  console.log("DOWNLOADING");
  //res.download(FILES_DIR + '/1757068289909-579381791-TESTTEST.zip');
});

let tempFileName;
//Used to choose where to store the files on the harddrive
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    //cb(null, file.originalname + "-" + uniqueSuffix);
    tempFileName = uniqueSuffix + '-' + file.originalname;
    cb(null, tempFileName);
  },
});

const upload = multer({ storage: storage });

//Uploads the file(endpoint)(single file upload from form input[name = uploadFile])
app.post('/test.html', upload.single('uploadFile'), function (req, res, next) {
  //req.file //|| req.file is the `uploadFile` file
  console.log(req.file);
});

//Posts to server from client
app.post('/', (req, res) => {
  res.send('Responding to POST');
});

app.listen(port, () => {
  console.log('server lyssnar på port:' + port);
});

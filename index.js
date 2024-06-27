//import the core filesystem packages from node to read and write data from files and directory.
const fs = require('fs');
const express = require('express'); //import the express package for connecting the data to server
const app = express();

const cors = require('cors');
app.use(cors({
    origin: '*' //mention the path from which we are receiving request to this API.
}))
app.listen('3000'); // connected through the port 3000
const timestamp = Date.now(); //current timestamp 
const dateString = new Date(timestamp).toLocaleTimeString(); //converting into a readable date format
const folderPath = 'C:\MERN STACK\work out\zen class task\MongoDB\NodeJSFileSystem'; //mention the folder path where the files needs to be created and read.

//in the default homepage a welcome message has been added.
app.get('/', (req,res) =>{
    res.json({"welcome" : 'Hello there'});
} )

//log the current date in string format.
console.log(dateString);

//creating a new text file with the file name of the current time stamp and added the content with the timestamp.
fs.writeFileSync(`${timestamp}.txt`, `current timestamp while creating this file is ${timestamp} which is ${dateString}`);


//reading the files present inside the given folder path.
fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
  
    console.log('Files in the directory:', files);
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file}`);
    });
  });
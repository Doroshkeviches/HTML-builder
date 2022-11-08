
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'text.txt'); 

const fileContent = fs.createReadStream(
    dir, 
    );
    fileContent.on('data', function (text) {
        console.log(text.toString());
       
    });



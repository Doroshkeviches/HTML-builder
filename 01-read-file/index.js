
const fs = require('fs');
const fileContent = fs.createReadStream(
    'C:/Users/admin/HTML-builder/01-read-file/text.txt', 
    );
    fileContent.on('data', function (text) {
        console.log(text.toString());
    });



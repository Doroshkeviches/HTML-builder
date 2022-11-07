


const fs = require('fs');
const path = require('path');

fs.writeFile(
    path.join(__dirname, 'text.txt'),
    '',
    (err) => {
        if (err) throw err;
        
    }
);
const { stdin, stdout } = process;
console.log('Введи текст')
stdin.on('data' , message => {
    message = message.toString();

     if(message.slice(0,-2) == 'exit') {
        console.log('The end')
        process.exit()
    } 
    process.on('SIGINT', function() {
        console.log("The end");
        process.exit()
    });
    
    
    fs.appendFile(
        path.join(__dirname, 'text.txt'),
        `${message}`,
        err => {
            if (err) throw err;
        }
    );
});



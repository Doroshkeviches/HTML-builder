let fs = require('fs');
let path = require('path');
const direct = path.join(__dirname, 'styles');
const { text } = require('stream/consumers');
const direct2 = path.join(__dirname, 'project-dist', 'bundle.css');

let arr =  [];
function copyFile (dir){
    fs.writeFile(
        path.join(__dirname, 'bundle.css'),
        '',
        (err) => {
            if (err) throw err;
            
        }
    );
    let toWrite = [];
    let files = fs.readdir(dir, (err, files) => {
        for (let i in files){
            let name = dir + '/' + files[i];
            arr.push(name);
        }
        for ( let i = 0 ; i<arr.length; i++){
           
            if(path.extname(arr[i]) === '.css'){
                fs.readFile(arr[i],(err, fileContent) => {
                        if (err) throw err;
                        
                           
                            
                            toWrite.push(fileContent)
                            let b = toWrite.join('')
                            

                            fs.writeFile(direct2, b, function(error){
                    if(error) throw error; // ошибка чтения файла, если есть
                    console.log('Данные успешно записаны записать файл');
                 });
              });
               
  
            }
            
           
            
        }
        
    })
    
};

copyFile(direct)
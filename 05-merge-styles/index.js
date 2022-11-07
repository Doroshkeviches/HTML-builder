let fs = require('fs');
let direct = 'C:/Users/admin/HTML-builder/05-merge-styles/styles';

let path = require('path');
const { text } = require('stream/consumers');

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
                            

                            fs.writeFile('C:/Users/admin/HTML-builder/05-merge-styles/project-dist/bundle.css', b, function(error){
                    if(error) throw error; // ошибка чтения файла, если есть
                    console.log('Данные успешно записаны записать файл');
                 });
              });
               
  
            }
            
           
            
        }
        
    })
    
};

copyFile(direct)
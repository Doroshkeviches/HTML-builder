
const { dir } = require('console');
let fs = require('fs');
let direct = 'C:/Users/admin/HTML-builder/04-copy-directory/files-copy';
fs.mkdir(direct, err => {
   if(err) {
    console.log('Папка уже создана');
    fs.readdir(direct, (err, files) => {
      for (let i in files){
        fs.unlink(`${direct}/${files[i]}`, err => {
          if(err) throw err; // не удалось удалить файл
          console.log('Файл успешно удалён');
       });
          
      }
})}
else{
    console.log('Папка успешно создана');
}
});
let path = require('path');
let readFrom = 'C:/Users/admin/HTML-builder/04-copy-directory/files';
let copyDir = 'C:/Users/admin/HTML-builder/04-copy-directory/files-copy';
function listObjects(dir,copyDir){
    fs.readdir(dir, (err, files) => {
        
       for (let file of files){
         
          fs.stat(`C:/Users/admin/HTML-builder/06-build-page/assets`, (errStat, status) => {
             if(errStat) {
                throw errStat
             }else{
              
              if(!path.extname(file)){
                  
                  fs.mkdir(copyDir+'/'+file, err => {
    
                  console.log('Папка успешно создана');
                  });
                listObjects(dir + '/' + file, copyDir + '/' + file); // продолжаем рекурсию
             
            }else{
                
               
                fs.copyFile(`${dir}/${file}`, `${copyDir}/${file}`, err => {
                  if(err) throw err; // не удалось скопировать файл
                  console.log('Файл успешно скопирован');
               });
             } 
            }
          });
       
    }})
    };

    listObjects(readFrom,copyDir)
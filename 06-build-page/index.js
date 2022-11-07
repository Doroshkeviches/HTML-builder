


let path = require('path');
const http = require("http");
const fs = require("fs");
 
fs.mkdir('C:/Users/admin/HTML-builder/06-build-page/project-dist', err => {
    
    // console.log('Папка успешно создана');
 });
// fs.open('C:/Users/admin/HTML-builder/06-build-page/project-dist/index.html', 'w', (err) => {
//         if(err) throw err;
//         // console.log('File created');
//     });
    fs.open('C:/Users/admin/HTML-builder/06-build-page/project-dist/style.css', 'w', (err) => {
        if(err) throw err;
        // console.log('File created');
    });
    fs.mkdir('C:/Users/admin/HTML-builder/06-build-page/project-dist/assets', err => {
    
        // console.log('Папка успешно создана');
     });
     let header='';
     let articles='';
     let footer='';
     let about = ''
     fs.readFile(
        'C:/Users/admin/HTML-builder/06-build-page/template.html', 
        'utf8',
        (err, template) => {
            if (err) throw err;
            
    
fs.readFile('C:/Users/admin/HTML-builder/06-build-page/components/header.html', 'utf-8', (errorHeader,fileContentHeader) =>{
    if(errorHeader) throw errorHeader;
    header = template.replace('{{header}}', fileContentHeader);
 
fs.readFile('C:/Users/admin/HTML-builder/06-build-page/components/articles.html', 'utf-8', (errorHeader,fileContentHeader) =>{
    if(errorHeader) throw errorHeader;
    articles = header.replace('{{articles}}', fileContentHeader);
    // console.log(articles)
    fs.readFile('C:/Users/admin/HTML-builder/06-build-page/components/about.html', 'utf-8', (errorHeader,fileContentHeader) =>{
        // if(errorHeader) throw errorHeader;
        about = articles.replace('{{about}}', fileContentHeader || '');
        // console.log(articles)
 
fs.readFile('C:/Users/admin/HTML-builder/06-build-page/components/footer.html', 'utf-8', (errorHeader,fileContentHeader) =>{
    if(errorHeader) throw errorHeader;
    // console.log(typeof articles,'in')
    footer = about.replace('{{footer}}', fileContentHeader);
 
    // console.log(typeof footer,'in')
 
// console.log(typeof footer,'after')

fs.writeFile(
    'C:/Users/admin/HTML-builder/06-build-page/project-dist/index.html',
    footer,
    (err) => {
        if (err) throw err;
        
    }
);
}) 
}) 
})
})
}) 

let readFrom = 'C:/Users/admin/HTML-builder/06-build-page/assets';
let copyDir = 'C:/Users/admin/HTML-builder/06-build-page/project-dist/assets'
function listObjects(dir,copyDir){
    fs.readdir(dir, (err, files) => {
        
       for (let file of files){
         
          fs.stat(`C:/Users/admin/HTML-builder/06-build-page/assets`, (errStat, status) => {
             if(errStat) {
                throw errStat
             }else{
              
              if(!path.extname(file)){
                  
                  fs.mkdir(copyDir+'/'+file, err => {
    
                //   console.log('Папка успешно создана');
                  });
                listObjects(dir + '/' + file, copyDir + '/' + file); // продолжаем рекурсию
             
            }else{
                
               
                fs.copyFile(`${dir}/${file}`, `${copyDir}/${file}`, err => {
                  if(err) throw err; // не удалось скопировать файл
                //   console.log('Файл успешно скопирован');
               });
             } 
            }
          });
       
    }})
    };
 
 listObjects(readFrom,copyDir)



 
let direct = 'C:/Users/admin/HTML-builder/06-build-page/styles';




let arr =  [];
function copyFile (dir){
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
                            fs.writeFile('C:/Users/admin/HTML-builder/06-build-page/project-dist/style.css', b, function(error){
                    if(error) throw error; // ошибка чтения файла, если есть
                    console.log('Данные успешно записаны записать файл');
                 });
              });
            }
            
        }
    })
};

copyFile(direct)
      
   
  







     
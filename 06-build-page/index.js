


let path = require('path');
const http = require("http");
const fs = require("fs");
const direct1 = path.join(__dirname, 'project-dist');
const direct2 = path.join(__dirname, 'project-dist','style.css');
const direct3 = path.join(__dirname, 'project-dist','assets');
const direct4 = path.join(__dirname, 'template.html');
const direct5 = path.join(__dirname, 'components','header.html');
const direct6 = path.join(__dirname, 'components','articles.html');
const direct7 = path.join(__dirname, 'components','about.html');
const direct8 = path.join(__dirname, 'components','footer.html');
const direct9 = path.join(__dirname, 'project-dist','index.html');


 
fs.mkdir(direct1, err => {
    
    // console.log('Папка успешно создана');
 });
// fs.open('C:/Users/admin/HTML-builder/06-build-page/project-dist/index.html', 'w', (err) => {
//         if(err) throw err;
//         // console.log('File created');
//     });
    fs.open(direct2, 'w', (err) => {
        if(err) throw err;
        // console.log('File created');
    });
    fs.mkdir(direct3, err => {
    
        // console.log('Папка успешно создана');
     });
     let header='';
     let articles='';
     let footer='';
     let about = ''
     fs.readFile(
        direct4, 
        'utf8',
        (err, template) => {
            if (err) throw err;
            
    
fs.readFile(direct5, 'utf-8', (errorHeader,fileContentHeader) =>{
    if(errorHeader) throw errorHeader;
    header = template.replace('{{header}}', fileContentHeader);
 
fs.readFile(direct6, 'utf-8', (errorHeader,fileContentHeader) =>{
    if(errorHeader) throw errorHeader;
    articles = header.replace('{{articles}}', fileContentHeader);
    // console.log(articles)
    fs.readFile(direct7, 'utf-8', (errorHeader,fileContentHeader) =>{
        // if(errorHeader) throw errorHeader;
        about = articles.replace('{{about}}', fileContentHeader || '');
        // console.log(articles)
 
fs.readFile(direct8, 'utf-8', (errorHeader,fileContentHeader) =>{
    if(errorHeader) throw errorHeader;
    // console.log(typeof articles,'in')
    footer = about.replace('{{footer}}', fileContentHeader);
 
    // console.log(typeof footer,'in')
 
// console.log(typeof footer,'after')

fs.writeFile(
    direct9,
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

let readFrom = path.join(__dirname, 'assets');
let copyDir = direct3
function listObjects(dir,copyDir){
    fs.readdir(dir, (err, files) => {
        
       for (let file of files){
         
          fs.stat(direct3, (errStat, status) => {
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



 
let direct = path.join(__dirname, 'styles');




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
      
   
  







     
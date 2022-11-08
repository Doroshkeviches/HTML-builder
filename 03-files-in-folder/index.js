var fs = require('fs');
let path = require('path');
const direct = path.join(__dirname, 'secret-folder'); 
// let direct = '/Users/admin/HTML-builder/03-files-in-folder/secret-folder'
let getFiles = function (dir){
    
    let secretFile =  [];
    let files = fs.readdir(dir, (err, files) => {

        for (let i in files){
            let name = dir + '/' + files[i];
            secretFile.push(name);
        }
        for ( let i = 0 ; i<secretFile.length; i++){
            fs.stat(secretFile[i], (err, stats) => {
                if (err) {
                  console.log(`File doesn't exist.`)
                } else if(stats.isDirectory()) {
                    
                    // direct +='/'+path.basename(secretFile[i])
                    // getFiles(direct) 
                }
                else{
                    
                    console.log(path.basename(secretFile[i]),'-',path.extname(secretFile[i]),'-',stats.size,'bytes')
                }
              })
        }
        
        
    })}

    getFiles(direct)
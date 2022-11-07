let fs = require('fs');
const path = require('path');
const folder = '03-files-in-folder/secret-folder';

fs.readdir(folder, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.log(err);
    }
    else {
        const lst = [];
        let extension;
        let file_name;

        for (let file of files){
            if (file.isFile()) {
                extension = path.extname(file.name);
                file_name = path.basename(file.name, extension);
                lst.push([file.name, file_name, extension])
            }
        }
        for (let i = 0; i < lst.length; i++) {
            fs.stat(`${folder}/${lst[i][0]}`, (errStat, status) => {
                if (errStat) {
                    console.log(errStat);
                }
                else {
                    console.log(`${lst[i][1]} - ${lst[i][2].slice(1)} - ${status.size}`);
                }
            })
        }
    }
});
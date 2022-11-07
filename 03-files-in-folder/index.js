const fs = require('fs');
const path = require('path');

fs.readdir('03-files-in-folder/secret-folder', { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
    }
    else {
        let extension;
        let name;

        for (const i of files) {
            if (i.isFile()) {
                extension = path.extname(i.name);
                name = path.basename(i.name, extension);
                console.log(`${name} - ${extension.slice(1)}`);
            }
        }
        
    }
})
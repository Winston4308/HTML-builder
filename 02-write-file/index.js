const readline = require('readline');
const fs = require('fs');
const process = require('process');

fs.open('02-write-file/text.txt', 'w', (err) => {
    if(err) {
        console.log(err);
    }
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const answer = (response) => {
    if (response == 'exit') {
        console.log('Goodbye');
        rl.close ();
    }
    else {
        fs.appendFile('02-write-file/text.txt', `${response}\n`, (err) => {
            if(err) {
                console.log(err);
            }
        })
        rl.question('', answer);
    }
    
}

process.on('SIGINT', () => {
    console.log('Press Ctrl+C to exit');
});

rl.question('Hello!\n', answer);
const path = require('path')
const fs = require('fs')
const fsPromises = fs.promises

function base64_encode(file) {
    fs.readFile(file, (err, buffer) => {
        if(err) {
            console.log(err);
            return
        }
        console.log(buffer);
        
        const styl = 'data:text/css;base64,' + new Buffer(buffer).toString('base64')
        // console.log('styl: ', styl);
        fsPromises.writeFile(path.resolve(__dirname, '../build/qr'), styl)
    })
}

base64_encode(path.resolve(__dirname, '../src/common/css/qrcode.css'))
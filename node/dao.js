const fs = require('fs');
const path = require('path');

function getDataFromTxt(key){
    const filePath = path.resolve(__dirname, 'dataBase', key + '.txt');
    const getData = new Promise((resolve, reject) => {
        fs.readFile(filePath, function(err, data){
            if(err){
                reject(err);
            }
            resolve(data + '');
        })
    })
    return getData;
}

function writeDataToTxt(key, data){
    const filePath = path.resolve(__dirname, 'dataBase', key + '.txt');
    fs.unlink(filePath, function(err){
        if(err){
            console.log(err);
            return;
        }
        fs.writeFile(filePath, data+'', function(err){
            if(err){
                console.log(err);
                return;
            }
            console.log('write Scuess');
        })
    })
}

module.exports = {
    getDataFromTxt,
    writeDataToTxt
}
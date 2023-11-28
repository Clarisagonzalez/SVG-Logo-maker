const filesystem = require('fs');

function saveSVGToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]");
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

module.exports = { saveSVGToFile };
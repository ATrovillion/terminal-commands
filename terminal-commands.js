const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');

        console.log(filesToString);
    });
};

module.exports.touch = () => {
    //create touch here
    fs.writeFile('./user.txt', { flag: 'wx'},  (err) => {
        if (err) throw err;
        console.log("Saved!");
    });
};

module.exports.mkdir = () => {
    //create mkdir here
    fs.mkdir('./check', (err) => {
        if (err) throw err;
        console.log("Directory created!");
    });
};
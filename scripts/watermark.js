var fs = require('fs'),
    gm = require('gm');

var dir = './scripts/images/',
    dirIn = dir + 'in/',
    dirOut = dir + 'out/';

fs.readdir(dirIn, function(error, files) {
    for(var index in files) {
        gm(dirIn + files[index])
            .fontSize(60)
            .drawText(20, 20, 'copyright @ivyzheng', 'SouthWest')
            .write(dirOut + files[index], function(err) {
                if (err) console.log(err);
            });
    }
});

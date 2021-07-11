const mergeImages = require('merge-images');
const { Canvas, Image } = require('canvas');
const fs = require('fs')

mergeImages(['./body.png', './eyes.png', './mouth.png'], {
        Canvas: Canvas,
        Image: Image
    })
    .then(b64 => {
        console.log(typeof './mouth.png')
        const base64Data = b64.replace(/^data:image\/png;base64,/, "");
        fs.writeFile("out.png", base64Data, 'base64', err => {
            console.log(err);
        });
    }).catch(err => console.log(err))
/**
 * dynamic-watermark
 *
 *
 * Copyright (c) 2017 Navjot Dhanawat
 * Licensed under the MIT license.
 */

/**
 * Dynamic Watermark is npm watermark module to add watermark over image.
 * It can add image as well as text watermark on given positions.
 * @param  {options}
 * @return {callback}
 */


var gm = require('gm');

var embed = function (options, callback) {

    var source = options.source;   // Source file path
    var logo = options.logo;   // Logo file path
    var ext = source.split('.').pop();
    var destination = options.destination; // Destination file path

    /**
    * Left bottom: X = 10, Y = logoY
    * Right bottom: X = logoX, Y = logoY
    * Left Top: X = 10, Y = 10
    * Right Top: X = logoX, Y = 10
    */

    var position = options.position;   //'right-bottom';
    var type = options.type;    //'text';
    var text = options.text ? options.text : '';
    gm(source)
        .size(function (err, size) {
            console.log(err);
            if (!err) {
                var logoWidth = (size.width / 10);
                var logoHeight = (size.height / 10);
                var logoX = size.width - (size.width / 8);
                var logoY = size.height - (size.height / 8);
                console.log(logoWidth + '==' + logoHeight + "==" + logoX + "==" + logoY);
                switch (position) {
                    case 'left-top':
                        var logoX = 10;
                        var logoY = 10;
                        break;

                    case 'left-bottom':
                        var logoX = 10;
                        var logoY = size.height - (size.height / 8);
                        break;

                    case 'right-top':
                        var logoX = size.width - (size.width / 8);
                        var logoY = 10;
                        break;

                    default:
                        break;
                }

                if (type === 'text') {
                    gm(source)
                        .drawText(logoX, logoY, 'from scratch')
                        .write(destination, function (e) {
                            console.log(e || 'Text Watermark Done'); // What would you like to do here?
                            if (!e) {
                                callback({ status: 1 });
                            } else {
                                callback({ status: 0 });
                            }
                        });
                } else {
                    gm(source)
                        .draw(['image over ' + logoX + ',' + logoY + ' ' + logoWidth + ',' + logoHeight + ' ' + logo])
                        .write(destination, function (e) {
                            console.log(e || 'Image Watermark Done'); // What would you like to do here?
                            if (!e) {
                                callback({ status: 1 });
                            } else {
                                callback({ status: 0 });
                            }
                        });
                }
            }
        });
};

module.exports.embed = embed;
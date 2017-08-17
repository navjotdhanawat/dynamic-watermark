# How to Setup: Dynamic Watermark to add watermark(image/text) over image using nodejs.

```
npm install dynamic-watermark --save

```

Dynamic Watermark is npm watermark module to add watermark over image. It can add image as well as text watermark on given positions


After successful installation of dynamic-watermark follow below steps:

Step 1: include dynamic-watermark package:

var watermark = require('dynamic-watermark');


Step 2: Provide following options:

var options = {
    source : "source/file/path",
    logo: "logo/file/path", // This is optional if you have provided text Watermark
    destination: "destination/file/path",
    position: "left-top",    // left-top, left-bottom, right-top, right-bottom
    type: "text",   // text or image
    text: "Watermark Text"  // This is optional if you have provided logo file
}

Step 3: Final step is to call embed method by passing above options.

watermark.embed(options, function(status) {
    //Do what you want to do here
    console.log(status);
})


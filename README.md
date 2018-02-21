## Dynamic Watermark : (dynamic-watermark)

Dynamic Watermark is npm watermark module to add watermark over image. It can add image as well as text watermark on given positions

![Watermark](https://github.com/navjotdhanawat/dynamic-watermark/blob/master/sample-watermark.jpg?style=centerme)

```
npm install dynamic-watermark --save

```


After successful installation of dynamic-watermark follow below steps:

#### Step 1: include dynamic-watermark package:
```
var watermark = require('dynamic-watermark');
```

#### Step 2: Provide following options:
```
var optionsImageWatermark = {
    type: "image",
    source: "a.png",
    logo: "logo.png", // This is optional if you have provided text Watermark
    destination: "output.png",
    position: {
        logoX : 200,
        logoY : 200,
        logoHeight: 200,
        logoWidth: 200
    }
};

var optionsTextWatermark = {
    type: "text",
    text: "Watermark text", // This is optional if you have provided text Watermark
    destination: "output.png",
    source: "a.png",
    position: {
        logoX : 200,
        logoY : 200,
        logoHeight: 200,
        logoWidth: 200
    },
    textOption: {
        fontSize: 100, //In px default : 20
        color: '#AAF122' // Text color in hex default: #000000
    }
};
```
#### Step 3: Final step is to call embed method by passing above options.
```
//optionsImageWatermark or optionsTextWatermark
watermark.embed(optionsImageWatermark, function(status) {
    //Do what you want to do here
    console.log(status);
});
```

##### If you are facing any issue then dont forget to open
[Open issues](https://github.com/navjotdhanawat/dynamic-watermark/issues)

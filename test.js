const fs   = require('fs');

const NicePageBuilder = require('./index.js');
const nicePageBuilder = NicePageBuilder(
    {
        'templates' : {"/main.php":[[{"TEMPLATE":"template.html"},11,["MAIN",["SLOT"]]],1726546571712,1728347634656],"/template.html":[[9,"<!DOCTYPE html>",["HTML",["BODY",["SLOT"]]]],1726278627669,1726550082644]},
        'mixins': {"/mixin.json":[{"MIXINS":["mixin.pen.json"],"apple":1,"TOC":[1,"intro"]},1726221888590,1729081829932],"/mixin.pen.json":[{"MIXINS":["mixin.pineapple.json"],"pen":2},1729081817854,1729082148282],"/mixin.pineapple.json":[{"pinapple":3},1729081860777,1729081886161]}
    }
);


    const chunks = [];

    new Promise((resolve) => {
        fs.createReadStream(__dirname + '/test/builder.html.json')
          .pipe(nicePageBuilder.builder.stream())
          .pipe(nicePageBuilder.json2html.stream(NicePageBuilder.onInstruction[1]))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    }).then(
        (json) => console.log(json)
    );

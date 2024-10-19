const test = require('ava');
const fs   = require('fs');

const NicePageBuilder = require('../index.js');

test('builder.stream', async t => {
    const chunks = [];

    const nicePageBuilder = NicePageBuilder(
        {
            'templetes' : {"/main.php":[[{"TEMPLETE":"templete.html"},11,["MAIN",["SLOT"]]],1726546571712,1728347634656],"/templete.html":[[9,"<!DOCTYPE html>",["HTML",["BODY",["SLOT"]]]],1726278627669,1726550082644]},
            'mixins': {"/mixin.json":[{"TEMPLETE":"main.php","MIXINS":["mixin.pen.json"],"apple":1,"TOC":[1,"intro"]},1726221888590,1729081829932],"/mixin.pen.json":[{"MIXINS":["mixin.pineapple.json"],"pen":2},1729081817854,1729082148282],"/mixin.pineapple.json":[{"pinapple":3},1729081860777,1729081886161]}
        }
    );

    await new Promise((resolve) => {
        fs.createReadStream(__dirname + '/builder.html.json')
          .pipe(nicePageBuilder.builder.stream())
          .pipe(nicePageBuilder.json2html.stream(NicePageBuilder.onInstruction[1]))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    });

    t.deepEqual(chunks.join(''), '<!DOCTYPE html><html><body><main><p>Hello, World!</main>');
});

test('builder.stream - 11', async t => {
    const chunks = [];

    const nicePageBuilder = NicePageBuilder(
        {
            'templetes' : {},
            'mixins': {"/mixin.json":[{"MIXINS":["mixin.pen.json"],"apple":1,"TOC":[1,"intro"]},1726221888590,1729081829932],"/mixin.pen.json":[{"MIXINS":["mixin.pineapple.json"],"pen":2},1729081817854,1729082148282],"/mixin.pineapple.json":[{"pinapple":3},1729081860777,1729081886161]}
        }
    );

    await new Promise((resolve) => {
        fs.createReadStream(__dirname + '/builder.html.json')
          .pipe(nicePageBuilder.builder.stream())
          // .pipe(nicePageBuilder.json2html.stream(NicePageBuilder.onInstruction[1]))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    });

    t.deepEqual(chunks.join(''), '[{"URL":"/","CREATED_AT":1726278571695,"MODIFIED_AT":1728347629480,"apple":1,"TOC":[1,"intro"],"pen":2,"pinapple":3},11,["P","Hello, World!"]]');
});
const test = require('ava');
const NicePageBuilder = require('../index.js');
const nicePageBuilder = NicePageBuilder();
const fs              = require('fs');

test('stream', async t => {
    const chunks = [];

    await new Promise((resolve) => {
        fs.createReadStream(__dirname + '/index.html.json')
          .pipe(nicePageBuilder.json2html.stream(NicePageBuilder.onInstruction[1]))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    });
    
    const expected = nicePageBuilder.json2html(JSON.parse(fs.readFileSync(__dirname + '/index.html.json')), NicePageBuilder.onInstruction[ 1 ]);

    t.deepEqual(chunks.join(''), expected);
});

test('pause & resume', async t => {
    const chunks = [];

    await new Promise((resolve) => {
        fs.createReadStream(__dirname + '/index.html.json')
          .pipe(nicePageBuilder.json2html.stream(NicePageBuilder.onInstruction[ 2 ]))
          .on('data', (chunk)=> {chunks.push(chunk)})
          .on('end', ()=> {resolve(chunks.join(''))});
    });
    
    const expected = nicePageBuilder.json2html(JSON.parse(fs.readFileSync(__dirname + '/index.html.json')), NicePageBuilder.onInstruction[ 2 ]);

    t.deepEqual(chunks.join(''), expected);
});
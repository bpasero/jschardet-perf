var jschardet = require("jschardet");
var fs = require("fs");

const buf = fs.readFileSync('test_file.txt');

const now = Date.now();
jschardet.detect(buf);

console.log(Date.now() - now);
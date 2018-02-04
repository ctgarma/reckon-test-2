// test cases
const expect = require('expect');
const utils = require('.././lib/stringops.js');
const api = require('../lib/api');

var text = 'Peter told me (actually he slurrred) that peter the pickle piper piped a pitted pickle before he petered out. Phew!';

it('should determine position of the string in a text', () => {
  var res = utils.searchString(text,
    'Peter');
  if (res[0] != '1' || res[1] != '43' || res[2] != '98' || res.length != 3) {
    throw new Error(`expected 1,43,98 and with length 3 but got ${res.toString()} and with lengh ${res.length}`);
  }
});
//case insensitive
it('should determine position of the string in a text', () => {
  var res = utils.searchString(text,
    'peter');
  if (res[0] != '1' || res[1] != '43' || res[2] != '98' || res.length != 3) {
    throw new Error(`expected 1,43,98 and with length 3 but got ${res.toString()} and with lengh ${res.length}`);
  }
});
// no string exists
 it('should determine position of the string in a text', () => {
   var res = utils.searchString(text,
     'noname');
     expect(res.length).toBe(0);

 });

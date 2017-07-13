'use strict';
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });


exports.handler = (event, ctx, callback) => {
  console.log('invoke helloworld!');
// Or var xlsx = require('node-xlsx').default;
  const xlsx = require('node-xlsx').default;
  const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
  var buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer
  callback(null, buffer);
};

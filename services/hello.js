'use strict';
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const B64 = require('b64');

exports.handler = (event, ctx, callback) => {
  console.log('invoke helloworld!', event);
  const xlsx = require('node-xlsx').default;
  const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
  const buffer = xlsx.build([{ name: "Data", data: data }]);
  callback(null, { content: B64.encode(buffer).toString() });
};

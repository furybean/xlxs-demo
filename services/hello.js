'use strict';
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const B64 = require('b64');

exports.handler = (event, ctx, callback) => {
  console.log('invoke helloworld!');
  const xlsx = require('node-xlsx').default;
  let args;
  try {
    args = JSON.parse(event.toString());
  } catch(e) {
    args = {};
  }
  const data = args.data || [];
  const header = args.header || [];
  const buffer = xlsx.build([{ name: "Data", data: [header].concat(data) }]);
  callback(null, { content: B64.encode(buffer).toString() });
};

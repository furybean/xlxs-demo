'use strict';
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

exports.handler = (event, ctx, callback) => {
  console.log('invoke fc_helloworld!');
  callback(null, `Hello world! NODE_ENV: ${process.env.NODE_ENV}`);
};

#!/usr/bin/env node
'use strict';

const ncp = require('ncp').ncp;
const path = require('path');

const SUPPLY_FOLDER = '../supply';
const source = path.join(__dirname, SUPPLY_FOLDER);
const destination = process.cwd();

ncp(source, destination, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('done');
});

var express = require('express');
var router=express.Router();
require("dotenv").config();

console.log(process.env.MYAQL_DB)
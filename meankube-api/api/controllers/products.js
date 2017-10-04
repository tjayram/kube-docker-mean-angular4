'use strict';

var util = require('util');

module.exports = { products: products };

function products(req, res) {

    var productList = [];
    var MongoClient = require('mongodb').MongoClient

    var dbURL = 'mongodb://meankube-db/meankube';
    if(process.env.MEANKUBE_DB_SERVICE_HOST !== undefined) {
       dbURL = 'mongodb://' + process.env.MEANKUBE_DB_SERVICE_HOST + ':' + process.env.MEANKUBE_DB_SERVICE_PORT + '/meankube';
    }
    
    console.log("In Products. Calling MongoDB: " + dbURL);
    
    MongoClient.connect(dbURL, function (err, db) {
        
      try {
        if (err) throw err
      
        db.collection('products').find().toArray(function (err, result) {
          if (err) throw err
      
          productList = result;
          console.log(productList);

          res.json(productList);
        })
      
      } catch(ex) {
        console.error('Exception: /products');
        console.error(ex);
  
        res.json(productList);
      }

    });
}
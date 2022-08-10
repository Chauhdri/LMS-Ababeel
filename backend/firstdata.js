
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://adminAbabeel:2813239@cluster0.jgb90h0.mongodb.net/test";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("institutes").collection("institute");
  // perform actions on the collection object
  console.log("hi")

  var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ];
  
  
    collection.find({}, {projection:{_id:0,address:0,name:1 }}).toArray( function(err, result) {
      if (err) throw err;
      console.log(result);
    client.close();
  })




  

});


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
  // });



  // MongoClient.connect(uri, function (err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("mydb");
  //   dbo.createCollection("customers", function (err, res) {
  //     if (err) throw err;
  //     console.log("Collection created!");
  //     db.close();
  //   });
  // });

// //
// var { MongoClient, ServerApiVersion } = require('mongodb').MongoClient;
// var url = "mongodb+srv://adminAbabeel:2813239@cluster0.jgb90h0.mongodb.net/?retryWrites=true&w=majority";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });



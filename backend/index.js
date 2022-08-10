const express = require('express')
const app = express()
const port = 4002;
let userData;

// congfi to Mongodb database.
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://adminAbabeel:2813239@cluster0.jgb90h0.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect((err,db) => {
//     const collection = client.db("clients").collection("users");

//     collection.find({email:"abc@gmail.com"}, { projection: { _id: 0 } }).toArray(function (err, result) {
//         if (err) throw err;
//         //fetchPermission();
//         userData=result;
//         console.log(userData)
//         client.close();
//     })
//     if (err) throw err;
// })

// .listen(
//     port,()=>{
//         console.log("triggered")
//     }
// )

// app.get('/', (req, res) => {
//   res.send(userData)
// })

app.listen(4009, () => {                
  console.log(`Example app listening on port ${port}`)
  // console.log(res)
})
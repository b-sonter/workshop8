//a set of data is added to the database
module.exports = function(MongoClient, url){
  this.MongoClient = MongoClient;
  this.url = url;

  let data =[
    {id: 1, name:"banana", price:1.00, type:"fruit", description:"a curved yellow fruit"},
    {id: 2, name:"apple", price:1.50, type:"fruit", description:"a round red fruit"},
    {id: 3, name:"carrot", price:0.80, type:"vegetable", description:"a long orange vegetable"}
  ]

  this.MongoClient.connect(this.url, function(err, db){
      if(err) throw err;

      let dbo = db.db("mydb");
      dbo.collection("products").insertMany(data, function(err, res){
        if(err) throw err;

        else{
          console.log("Inserted " + res.insertedCount + " documents to products.");
        }
      });
      db.close();
    });
  }

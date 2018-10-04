//a set of data is added to the database
module.exports = function(MongoClient, url){
  this.MongoClient = MongoClient;
  this.url = url;

  let data =[
    {name:"banana", price:1.00, type:"fruit", description:"a curved yellow fruit"},
    {name:"apple", price:1.50, type:"fruit", description:"a round red fruit"},
    {name:"carrot", price:0.80, type:"vegetable", description:"a long orange vegetable"}
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

    this.MongoClient.connect(this.url, function(err, db){
      if(err) throw err;

      let dbo = db.db("mydb");
      //check data is input
      dbo.collection("products").find({}).toArray(function(err, result){
        if(err) throw err;

        console.log(result);

        db.close();
      });
    });

  }

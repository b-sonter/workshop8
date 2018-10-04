//a collection is added to the database
module.exports = function(MongoClient, url){
  this.MongoClient = MongoClient;
  this.url = url;

  this.MongoClient.connect(this.url, function(err, db){
      if(err) throw err;

      let dbo = db.db("mydb");
      dbo.createCollection("products", function(err, res){
        if(err){
          console.log("Failed to create collection - products");
        }
        else{
          console.log("Created collection products.");
        }
      });
      db.close();
    });
  }

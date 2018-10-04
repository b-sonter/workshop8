//finds and reads all data in the database
module.exports = function(MongoClient, url){
  this.MongoClient = MongoClient;
  this.url = url;

  this.MongoClient.connect(this.url, function(err, db){
    if(err) throw err;

    let dbo = db.db("mydb");
    //check data is input
    dbo.collection("products").find({}).toArray(function(err, result){
      if(err) throw err;

      console.log("Read all data from database:")
      console.log(result);      

      db.close();
    });
  });

}

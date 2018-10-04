//a set of data is added to the database
module.exports = function(MongoClient, url){
  this.MongoClient = MongoClient;
  this.url = url;

  this.MongoClient.connect(this.url, function(err, db){
    if(err) throw err;

    let dbo = db.db("mydb");
    query = {name:"carrot"}
    dbo.collection("products").remove(query, function(err, res){
      if(err) throw err;

      else{
        console.log("Removed " + query + " from products.");
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

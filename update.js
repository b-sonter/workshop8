//a set of data is edited in the database
module.exports = function(MongoClient, url){
  this.MongoClient = MongoClient;
  this.url = url;

  this.MongoClient.connect(this.url, function(err, db){
    if(err) throw err;

    let dbo = db.db("mydb");
    query = {name:"apple"}
    update = {$set : {price:0.75}}
    dbo.collection("products").updateOne(query, update, function(err, res){
      if(err) throw err;

      else{
        console.log("Updated apple from products.");
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

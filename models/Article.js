var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//create schema and model 
var ArticleSchema = new Schema({
    
    title: {
      type: String,
      required: true
    },
    
    link: {
      type: String,
      required: true
    },
    
    note: {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
});

var Article = mongoose.model("Article", ArticleSchema);

// Export the article model
module.exports = Article;
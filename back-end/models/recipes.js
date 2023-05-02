const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

let recipeSchema = new Schema(
    {
        //_id:{type:ObjectId},
        Title : {type: String},
        Ingredients : {type: String},
        Instructions: {type: String},
        Image_Name: {type: String},
        Cleaned_Ingredients: {type: String},
        Rating: {type: Number},
        Comments: {type: Array}
    }
)

recipeSchema.plugin(mongoosePaginate);

const Recipe = mongoose.model('Recipe', recipeSchema, 'recipes');
module.exports = Recipe;

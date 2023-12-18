const mongoose = require("mongoose")
const productSchema = mongoose.Schema(
    {

        name: {
            type: string,
            require: [true, "Enter product name"]
        },

        quantity: {
            type: Number,
            rquired: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
        },

        image:{
            type: string,
            required:false,
        }

       
},
 {
    timestamps:true
}
)

const Product = mongoose.model("Product",productSchema);
module.exports = Products;
const Product = require('../models/product')


const productController ={

    //Cargar un producto nuevo a la BD
    addProduct : async (req, res) => {
        const {title, description, images, price} = req.body
        const productExist = await Product.findOne({title})

        if(productExist){
            res.json({success: false, error: "There is already a product with that title."})
        }else {
            const newProduct = new Product({
                title, description, images, price
            })
            var product = await newProduct.save()
                res.json({
                    success: true, product
                })
        }
    }
}

module.exports = productController
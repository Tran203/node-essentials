const express = require('express')
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.route('/products')
  //return products
  .get((req, res) => {
    res.json(products);
  })
  //post/create products
  .post((req, res) => {
    const newProduct = { ...req.body, id: products.length + 1 }
    products = [...products, newProduct]
    res.json(newProduct);
  })
  //ability to update
  .put((req, res) => {
    let updatedProduct;
    products = products.map(p => {
      if (p.id === req.body.id) {
        updatedProduct = { ...p, ...req.body };
        return updatedProduct;
      }
      return p;
    })
    res.json(updatedProduct);
  })
  //delete
  .delete((req, res) => {
    const deletedProduct = products.find(p => p.id === +req.body.id);
    products = products.filter(p => p.id !== +req.body.id);
    res.json(deletedProduct);
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
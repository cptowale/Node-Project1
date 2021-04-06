let express = require('express');
let app = express();
let products = [];
let id =1;

app.use(express.static('public'));
app.use(express.json());


app.get('/products', (req, resp) => {
    resp.send(products);
})

app.post('/products', (req, resp) => {
    let newProduct = req.body;
    newProduct.id =id;
    id++
    products.push(newProduct);
    resp.send('Created');
})

app.put('/products/:id', (req, resp) => {
   let productId = +req.params.id;
   let productForUpdate;
   for(let i = 0; i < products.length; i++) {
       if(products[i].id === productId){
        productForUpdate = products[i];
        break;
       }
   }
   if(productForUpdate){
       productForUpdate.price = request.body.price;
       resp.send('updated');
   } else {
       resp.send('rejected');
   }
})

app.delete('/products/:id', (req, resp) => {
    let productId = +req.params.id;
    for(let i = 0; i<products.length; i++) {
        if(products[i].id === productId){
            products.splice(i, 1);
            resp.send('Deleted');
            return;
        }
    }
    resp.send('Rejected');
})
app.listen(3000, () => console.log('listening 3000...'));

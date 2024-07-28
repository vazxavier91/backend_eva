//installed package in node js 
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const products = [];

app.post('/products', (req, res) => {
    const { name, price, quantity } = req.body;
    const newProduct = { id: products.length + 1, name, price, quantity };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const { quantity } = req.body;

    const productToUpdate = products.find((product) => product.id === productId);
    if (!productToUpdate) {
        return res.status(404).json({ message: 'Product not found' });
    }

    productToUpdate.quantity = quantity;
    res.json(productToUpdate);
});

app.get('/inventory/value', (req, res) => {
    const totalValue = products.reduce((acc, product) => {
        return acc + product.price * product.quantity;
    }, 0);

    res.json({ totalValue });
});

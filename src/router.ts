import { Router } from 'express';

export const router = Router();

// List categories
router.get('/categories', (req, res) => {
    res.send('OK');
});

// Create category
router.post('/categories', (req, res) => {
    res.send('OK');
});

// List products
router.get('/products', (req, res) => {
    res.send('OK');
});

// Create product
router.post('/categories', (req, res) => {
    res.send('OK');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
    res.send('OK');
});

// List orders
router.get('/orders', (req, res) => {
    res.send('OK');
});

// Create order
router.post('/order', (req, res) => {
    res.send('OK');
});

// Change order status
router.patch('/order/:orderId', (req, res) => {
    res.send('OK');
});

// Delete/cancel order
router.delete('/categories', (req, res) => {
    res.send('OK');
});

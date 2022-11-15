import express from 'express';
import mongoose from 'mongoose';

mongoose
    .connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const port = 3001;
        app.listen(3001, () => {
            console.log(`🤓 Server is up at http://localhost:${port} !`);
        });
    })
    .catch(() => console.log('Error to connect to MongoDB'));

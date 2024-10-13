import express from 'express';
import logger from './lib/logger.js';
import fileRoutes from './routes/fileRoutes.js';
const app = express();
const port = 9999;

app.use(express.json());
app.use('/api/file', fileRoutes);

app.listen(port, () => {
    logger.info(`File_ops server listening to port :: ${port}`);

    process
        .on('uncaughtException', (err) => {
            logger.info(`Uncaught Exception :: ${err}`);
        })
        .on('unhandledRejection', (err) => {
            logger.info(`Unhandled Exception :: ${err}`);
        });
});


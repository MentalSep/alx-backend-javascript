import express from 'express';
import setupRoutes from './routes';

const app = express();
const port = 1245;

setupRoutes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;
module.exports = app;

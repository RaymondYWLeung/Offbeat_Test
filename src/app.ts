import express from 'express';
import {connectDB} from "./services/database.service";
import {categoryRouter} from "./routes/promotionCategory.router";
import {promotionRouter} from "./routes/promotion.router";

const app = express();
const port = 3000;


app.use('/promotionCategory',categoryRouter);
app.use('/promotion',promotionRouter);


app.listen(port, () => {
    connectDB()
    .then(() => console.log(`server is listening on ${port} !!!`));
});
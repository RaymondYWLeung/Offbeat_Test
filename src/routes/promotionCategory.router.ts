// External Dependencies
import express, { Request, Response } from "express";
import {PromotionCategorySchema} from "../models/promotionCategory";
import mongoose from 'mongoose';

// Global Config
export const categoryRouter = express.Router();
categoryRouter.use(express.json());
const PromotionCategory = mongoose.model('PromotionCategory',PromotionCategorySchema,<string>process.env['CATEGORY_COLLECTION_NAME']);

// GET
categoryRouter.get("/", async (_req: Request, res: Response) => {

    await PromotionCategory.find({},function (error: any, result: any){
        if(error){
            console.log(error);
            res.status(400);
            res.send(error);
        }else {
            res.status(200);
            res.send(result);
        }
    }).clone().catch(function(err){ console.log(err)})

})

// POST
categoryRouter.post("/", async (req: Request, res: Response) => {

        const newCategory = new PromotionCategory(req.body);
        await newCategory.save(function(err) {
            if(err) {
                console.log(err);
                res.status(400);
                res.send(err);
            }
            else {
                res.status(200);
                res.json({
                    message: req.body.name + ' successfully registered!'
                });
            }
        });
});
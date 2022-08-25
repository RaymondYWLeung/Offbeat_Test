// External Dependencies
import express, { Request, Response } from "express";
import mongoose from 'mongoose';
import {PromotionSchema} from "../models/promotion";

// Global Config
export const promotionRouter = express.Router();
promotionRouter.use(express.json());
const Promotion = mongoose.model('Promotion',PromotionSchema,<string>process.env['PROMOTION_COLLECTION_NAME']);

// GET
promotionRouter.get("/:id", async (req: Request, res: Response) => {
    await Promotion.findOne({'id':req.params.id},function (error: any, result: any){
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
promotionRouter.post("/", async (req: Request, res: Response) => {
    const newCategory = new Promotion(req.body);
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
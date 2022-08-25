import {Schema} from "mongoose";

interface PromotionInterface {
    id: string;
    name: string;
    description: string; // HTML string
    promotionCategoryId: string;
    imageUrlList: string[];
}

export const PromotionSchema = new Schema<PromotionInterface>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    promotionCategoryId: { type: String, required: true },
    imageUrlList: [{type:"String"}]
});
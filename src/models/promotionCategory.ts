import { Schema } from 'mongoose';

interface PromotionCategoryInterface {
    id: string;
    name: string;
    parentPromotionCategoryId?: string
    subCategoryCount: number;
}

export const PromotionCategorySchema = new Schema<PromotionCategoryInterface>({
    id: { type: String, required: true },
    name: { type: String, required: true },
    subCategoryCount: { type: Number, required: true },
    parentPromotionCategoryId: String
});
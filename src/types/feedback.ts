export type Feedback = {
   id: number;
   category: string;
   categoryId?: number;
   subCategory: string;
   subCategoryId?: number;
   unit: string;
   keluhan: string;
   status: string;
   createdAt: string;
};

export interface CreateFeedbackPayload {
   id_category: number;
   id_sub_category: number;
   unit: string;
   keluhan: string;
}
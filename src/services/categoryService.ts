import axios from "axios";
import { ENDPOINTS } from "@/config/api";

export interface Category {
   id: number;
   name: string;
}

export interface SubCategory {
   id: number;
   name: string;
   id_category: number;
}

export const getAllCategories = async (): Promise<Category[]> => {
   const response = await axios.get(ENDPOINTS.feedback.categories);
   return response.data.map((item: Category) => ({
      id: item.id,
      name: item.name,
   }));
};

export const getSubCategories = async (categoryId: number): Promise<SubCategory[]> => {
   if (!categoryId) return [];

   const response = await axios.get(ENDPOINTS.feedback.subCategories(categoryId));
   return response.data.map((item: SubCategory) => ({
      id: item.id,
      name: item.name,
      id_category: item.id_category,
   }));
};
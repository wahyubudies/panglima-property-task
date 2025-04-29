import axios from "axios";
import { ENDPOINTS } from "@/config/api";
import { CreateFeedbackPayload, Feedback } from "@/types/feedback";
import { formatDate } from "@/utils/dateUtils";

// Get all feedback
export const getAllFeedback = async (): Promise<Feedback[]> => {
   const response = await axios.get(ENDPOINTS.feedback.list);
   return response.data.map((item: {
      id: string;
      category: string;
      id_category: string;
      sub_category: string;
      id_sub_category: string;
      unit: string;
      keluhan: string;
      status: string;
      created_at: string;
   }) => ({
      id: item.id,
      category: item.category,
      categoryId: item.id_category,
      subCategory: item.sub_category,
      subCategoryId: item.id_sub_category,
      unit: item.unit,
      keluhan: item.keluhan,
      status: mapStatus(item.status),
      createdAt: formatDate(item.created_at)
   }));
};

export const createFeedback = async (payload: CreateFeedbackPayload) => {
   const response = await axios.post(ENDPOINTS.feedback.create, payload);
   return response.data;
};

const mapStatus = (status: string): string => {
   const statusMap: { [key: string]: string; } = {
      pending: 'Tertunda',
      waiting: 'Menunggu',
      in_progress: 'Diproses',
      resolved: 'Selesai'
   };
   return statusMap[status] || status;
};
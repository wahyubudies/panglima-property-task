export const API_BASE_URL = "https://devtest.panglimapropertindo.id/api";

// Endpoint paths organized by feature
export const ENDPOINTS = {
   feedback: {
      list: `${API_BASE_URL}/feedback`,
      categories: `${API_BASE_URL}/feedback-category`,
      subCategories: (categoryId: number) => `${API_BASE_URL}/feedback-sub-category?id_category=${categoryId}`,
      create: `${API_BASE_URL}/feedback`,
   },
};
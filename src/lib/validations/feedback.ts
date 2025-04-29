import * as yup from "yup";

export const feedbackSchema = yup.object({
   id_category: yup.number().required("Category is required"),
   id_sub_category: yup.number().required("Sub category is required"),
   unit: yup.string().required("Unit is required"),
   keluhan: yup.string().required("Keluhan is required"),
});

export type FeedbackFormData = yup.InferType<typeof feedbackSchema>;
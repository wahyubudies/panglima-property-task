"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useFetchCategories } from "@/hooks/category/useFetchCategories";
import { useFetchSubCategories } from "@/hooks/category/useFetchSubCategories";
import { useCreateFeedback } from "@/hooks/feedback/useCreateFeedback";
import { feedbackSchema, type FeedbackFormData } from "@/lib/validations/feedback";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function AddFeedback() {
   const router = useRouter();
   const { mutate: createFeedback, isPending } = useCreateFeedback();
   const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<FeedbackFormData>({
      resolver: yupResolver(feedbackSchema)
   });

   const selectedCategoryId = watch("id_category");
   const { data: categories } = useFetchCategories();
   const { data: subCategories } = useFetchSubCategories(selectedCategoryId);

   const onSubmit = (data: FeedbackFormData) => {
      createFeedback(data);
   };

   return (
      <div className="container mx-auto p-6 mt-[73px]">
         <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Tambah Feedback Baru</h1>
            <Button
               className="shadow-none cursor-pointer"
               variant="outline"
               onClick={() => router.back()}>
               Kembali
            </Button>
         </div>

         <Card className="max-w-2xl mx-auto shadow-none">
            <CardHeader>
               <CardTitle>Form Feedback</CardTitle>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-700">
                        Category
                     </label>
                     <select
                        {...register("id_category")}
                        className="w-full px-4 py-2 border rounded-md"
                        onChange={(e) => {
                           setValue("id_category", Number(e.target.value));
                           setValue("id_sub_category", 0); // Reset sub-category
                        }}>
                        <option value="">Pilih Category</option>
                        {categories?.map((category) => (
                           <option key={category.id} value={category.id}>
                              {category.name}
                           </option>
                        ))}
                     </select>
                     {errors.id_category && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.id_category.message}
                        </p>
                     )}
                  </div>

                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-700">
                        Sub Category
                     </label>
                     <select
                        {...register("id_sub_category")}
                        className="w-full px-4 py-2 border rounded-md"
                        disabled={!selectedCategoryId}>
                        <option value="">Pilih Sub Category</option>
                        {subCategories?.map((subCategory) => (
                           <option key={subCategory.id} value={subCategory.id}>
                              {subCategory.name}
                           </option>
                        ))}
                     </select>
                     {errors.id_sub_category && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.id_sub_category.message}
                        </p>
                     )}
                  </div>

                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-700">
                        Unit
                     </label>
                     <input
                        type="text"
                        {...register("unit")}
                        className="w-full px-4 py-2 border rounded-md"
                     />
                     {errors.unit && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.unit.message}
                        </p>
                     )}
                  </div>

                  <div>
                     <label className="block mb-2 text-sm font-medium text-gray-700">
                        Keluhan
                     </label>
                     <textarea
                        {...register("keluhan")}
                        className="w-full px-4 py-2 border rounded-md"
                        rows={4}
                     />
                     {errors.keluhan && (
                        <p className="text-red-500 text-sm mt-1">
                           {errors.keluhan.message}
                        </p>
                     )}
                  </div>

                  <Button
                     type="submit"
                     className="w-full"
                     disabled={isPending}>
                     {isPending ? "Submitting..." : "Submit"}
                  </Button>
               </form>
            </CardContent>
         </Card>
      </div>
   );
}
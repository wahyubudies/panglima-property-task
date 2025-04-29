"use client";

import { SelectFilter } from "@/components/shared/select-filter";
import { Button } from "@/components/ui/button";
import { useFetchCategories } from "@/hooks/category/useFetchCategories";
import { useFetchSubCategories } from "@/hooks/category/useFetchSubCategories";
import { useRouter } from "next/navigation";

interface FeedbackFiltersProps {
   categoryId: string;
   subCategoryId: string;
   onCategoryChange: (value: string) => void;
   onSubCategoryChange: (value: string) => void;
}

export function FeedbackFilters({
   categoryId,
   subCategoryId,
   onCategoryChange,
   onSubCategoryChange,
}: FeedbackFiltersProps) {
   const router = useRouter();
   const { data: categories, isLoading: isLoadingCategories } = useFetchCategories();
   const { data: subCategories, isLoading: isLoadingSubCategories } = useFetchSubCategories(
      categories?.find(cat => cat.name === categoryId)?.id || 0
   );

   return (
      <div className="flex flex-col md:flex-row gap-4 mb-4 items-end">
         <div className="w-full md:w-1/3">
            <SelectFilter
               label="Category"
               placeholder="Select Category"
               options={categories || []}
               value={categoryId}
               onChange={(value) => {
                  onCategoryChange(value);
                  onSubCategoryChange("all");
               }}
               disabled={isLoadingCategories}
            />
         </div>
         <div className="w-full md:w-1/3">
            <SelectFilter
               label="Sub Category"
               placeholder="Select Sub Category"
               options={subCategories || []}
               value={subCategoryId}
               onChange={onSubCategoryChange}
               disabled={categoryId === "all" || isLoadingSubCategories}
            />
         </div>
         <div className="w-full flex justify-end">
            <Button
               className="shadow-none cursor-pointer"
               variant="outline"
               onClick={() => router.push("/feedback/add")}>
               + Tambah Feedback
            </Button>
         </div>
      </div>
   );
}
import { getAllCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useFetchCategories() {
   return useQuery({
      queryKey: ['categories'],
      queryFn: getAllCategories,
      refetchOnWindowFocus: false
   });
}
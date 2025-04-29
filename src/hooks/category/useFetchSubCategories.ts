import { getSubCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export function useFetchSubCategories(categoryId: number) {
   return useQuery({
      queryKey: ['subCategories', categoryId],
      queryFn: () => getSubCategories(categoryId),
      refetchOnWindowFocus: false,
      enabled: !!categoryId, // Only run the query if categoryId exists
   });
}
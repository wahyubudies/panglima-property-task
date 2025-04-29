import { getAllFeedback } from "@/services/feedbackService";
import { useQuery } from "@tanstack/react-query";

async function fetchFeedback() {
   const response = await getAllFeedback();
   return response;
}

export function useFetchFeedback() {
   return useQuery({
      queryKey: ['feedback'],
      queryFn: fetchFeedback,
      refetchOnWindowFocus: false
   });
}
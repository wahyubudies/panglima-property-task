import { createFeedback } from "@/services/feedbackService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useCreateFeedback() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: createFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['feedback'] });
      router.push('/feedback');
    },
  });
}
"use client";

import { StatusBadge } from "@/components/shared/status-badge";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { useFetchFeedback } from "@/hooks/feedback/useFetchFeedback";
import { Feedback } from "@/types/feedback";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"; import { FeedbackFilters } from "./feedback-filters"

export function FeedbackTable() {
   const router = useRouter();
   const { data, isLoading, isError } = useFetchFeedback();
   const [temporaryFeedbackData, setTemporaryData] = useState<Feedback[]>([]);
   const [categoryId, setCategoryId] = useState("all");
   const [subCategoryId, setSubCategoryId] = useState("all");

   useEffect(() => {
      if (data && data.length > 0) {
         setTemporaryData(JSON.parse(JSON.stringify(data)));
      }
   }, [data]);

   if (isLoading) {
      return <div className="p-6">Loading feedback...</div>;
   }

   if (isError) {
      return <div className="p-6 text-red-500">Gagal memuat feedback</div>;
   }

   const handleClickDetail = (feedback: Feedback) => {
      localStorage.setItem("selectedFeedback", JSON.stringify(feedback));
      router.push(`/feedback/${feedback.id}`);
   };

   const filteredData = temporaryFeedbackData.filter((feedback: Feedback) => {       
      if (categoryId === "all" && subCategoryId === "all") {
         return true;
      }
       
      if (categoryId !== "all" && subCategoryId === "all") {
         return feedback.category === categoryId;
      }
       
      if (categoryId !== "all" && subCategoryId !== "all") {
         return feedback.category === categoryId && feedback.subCategory === subCategoryId;
      }

      return true;
   });

   return (
      <div className="p-6 space-y-6">
         <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Feedback Management</h1>            
         </div>

         <FeedbackFilters
            categoryId={categoryId}
            subCategoryId={subCategoryId}
            onCategoryChange={setCategoryId}
            onSubCategoryChange={setSubCategoryId}
         />

         <div className="rounded-md border">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead className="text-center">No</TableHead>
                     <TableHead>Keluhan</TableHead>
                     <TableHead>Unit</TableHead>
                     <TableHead>Status</TableHead>
                     <TableHead>Tanggal</TableHead>
                     <TableHead>Aksi</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {filteredData && filteredData.length > 0 ? (
                     filteredData.map((feedback: Feedback, index: number) => (
                        <TableRow key={feedback.id}>
                           <TableCell className="text-center">{index + 1}.</TableCell>
                           <TableCell>{feedback.keluhan}</TableCell>
                           <TableCell>{feedback.unit}</TableCell>
                           <TableCell>
                              <StatusBadge status={feedback.status} />
                           </TableCell>
                           <TableCell>{feedback.createdAt}</TableCell>
                           <TableCell>
                              <span
                                 onClick={() => handleClickDetail(feedback)}
                                 className="text-primary-500 hover:underline text-sm cursor-pointer">
                                 Detail
                              </span>
                           </TableCell>
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell colSpan={6} className="text-center">
                           Tidak ada feedback.
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>
         </div>
      </div>
   );
}

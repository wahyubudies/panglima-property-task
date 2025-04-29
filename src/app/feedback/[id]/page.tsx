"use client";

import { StatusBadge } from "@/components/shared/status-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Feedback } from "@/types/feedback";

export default function FeedbackDetail() {
   const router = useRouter();
   const [feedback, setFeedback] = useState<Feedback | null>(null);

   useEffect(() => {
      const stored = localStorage.getItem("selectedFeedback");
      if (stored) {
         setFeedback(JSON.parse(stored));
      }
   }, []);

   const handleClickBack = () => {
      localStorage.removeItem("selectedFeedback");
      router.back();
   };

   return (
      <div className="container mx-auto p-6">
         <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Detail Feedback</h1>
            <Button
               className="shadow-none cursor-pointer"
               variant="outline"
               onClick={handleClickBack}>
               Kembali
            </Button>
         </div>

         <Card className="shadow-none">
            <CardHeader>
               <CardTitle>Feedback #{feedback && feedback.id}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                     <div>
                        <h3 className="text-sm font-medium text-gray-500">Category</h3>
                        <p className="text-base">{feedback && feedback.category}</p>
                     </div>

                     <div>
                        <h3 className="text-sm font-medium text-gray-500">Sub Category</h3>
                        <p className="text-base">{feedback && feedback.subCategory}</p>
                     </div>

                     <div>
                        <h3 className="text-sm font-medium text-gray-500">Unit</h3>
                        <p className="text-base">{feedback && feedback.unit}</p>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div>
                        <h3 className="text-sm font-medium text-gray-500">Status</h3>
                        <StatusBadge status={feedback?.status || ''} />
                     </div>

                     <div>
                        <h3 className="text-sm font-medium text-gray-500">Tanggal</h3>
                        <p className="text-base">{feedback && feedback.createdAt}</p>
                     </div>
                  </div>
               </div>

               <Separator />

               <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Keluhan</h3>
                  <div className="p-4 bg-gray-50 rounded-md">
                     <p className="text-base">{feedback && feedback.keluhan}</p>
                  </div>
               </div>

               <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Gambar</h3>
                  <div className="p-4 bg-gray-50 rounded-md text-center text-gray-400">
                     No images available
                  </div>
               </div>
            </CardContent>
         </Card>
      </div >
   );
}
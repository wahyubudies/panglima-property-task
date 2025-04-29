import { Feedback } from "@/types/feedback";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Feedback>[] = [
   {
      accessorKey: "category",
      header: "Category",
   },
   {
      accessorKey: "subCategory",
      header: "Sub Category",
   },
   {
      accessorKey: "unit",
      header: "Unit",
   },
   {
      accessorKey: "keluhan",
      header: "Keluhan",
   },
   {
      accessorKey: "status",
      header: "Status",
   },
   {
      accessorKey: "createdAt",
      header: "Tanggal",
   },
   {
      id: "actions",
      header: "Aksi",
      cell: ({ row }) => {
         const feedback = row.original;
         return (
            <a
               href={`/feedback/${feedback.id}`}
               className="text-primary-500 hover:underline text-sm">
               Detail
            </a>
         );
      },
   },
];

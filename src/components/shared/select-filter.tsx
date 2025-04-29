"use client";

import React from "react";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

interface SelectFilterProps {
   label: string;
   placeholder: string;
   options: { id: number; name: string }[];
   value: string;
   onChange: (value: string) => void;
   disabled?: boolean;
}

export function SelectFilter({
   label,
   placeholder,
   options,
   value,
   onChange,
   disabled = false,
}: SelectFilterProps) {
   return (
      <div className="space-y-1">
         <label className="text-sm font-medium">{label}</label>
         <Select value={value} onValueChange={onChange} disabled={disabled}>
            <SelectTrigger className={`${disabled ? "opacity-50" : ""}`}>
               <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="all">All</SelectItem>
               {options.map((option) => (
                  <SelectItem key={option.id} value={option.name}>
                     {option.name}
                  </SelectItem>
               ))}
            </SelectContent>
         </Select>
      </div>
   );
}
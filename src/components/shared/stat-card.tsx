interface StatCardProps {
   value: string;
   label: string;
}

export function StatCard({ value, label }: StatCardProps) {
   return (
      <div className="bg-[rgba(40,124,62,1)] text-white rounded-lg p-6 text-center">
         <h3 className="text-2xl font-semibold mb-2">{value}</h3>
         <p className="text-sm">{label}</p>
      </div>
   );
}
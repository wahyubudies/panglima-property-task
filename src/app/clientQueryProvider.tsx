"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

interface ClientQueryProviderProps {
   children: ReactNode;
}

const queryClient = new QueryClient();

const ClientQueryProvider: React.FC<ClientQueryProviderProps> = ({ children }) => {
   return (
      <QueryClientProvider client={queryClient} >
         {children}
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   );
};

export default ClientQueryProvider;
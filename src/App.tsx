
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RootLayout from "./components/layout/RootLayout";
import CaseConverter from "./pages/tools/CaseConverter";
import TextCounter from "./pages/tools/TextCounter";
import UrlEncoder from "./pages/tools/UrlEncoder";
import Base64Tool from "./pages/tools/Base64Tool";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/case-converter" element={<CaseConverter />} />
            <Route path="/text-counter" element={<TextCounter />} />
            <Route path="/url-encoder" element={<UrlEncoder />} />
            <Route path="/base64" element={<Base64Tool />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

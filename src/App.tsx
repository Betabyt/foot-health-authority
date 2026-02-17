import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import Crisis from "./pages/Crisis";
import Protocol from "./pages/Protocol";
import Impact from "./pages/Impact";
import Training from "./pages/Training";
import Partners from "./pages/Partners";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/crisis" element={<Crisis />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/training" element={<Training />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/executive-summary" element={<ExecutiveSummary />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

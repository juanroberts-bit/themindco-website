import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CpgFoodBeverage from "./pages/CpgFoodBeverage";
import LifeSciences from "./pages/LifeSciences";
import PharmaceuticalCompanies from "./pages/PharmaceuticalCompanies";
import GlobalPharma from "./pages/GlobalPharma";
import RegionalLeaders from "./pages/RegionalLeaders";
import Biotech from "./pages/Biotech";
import MedtechPackaging from "./pages/MedtechPackaging";
import HospitalsPayers from "./pages/HospitalsPayers";
import Payers from "./pages/Payers";
import OtherIndustries from "./pages/OtherIndustries";
import About from "./pages/About";
import WorkWithUs from "./pages/WorkWithUs";
import Contact from "./pages/Contact";
import Capabilities from "./pages/Capabilities";
import CapabilityDetail from "./pages/CapabilityDetail";
import Insights from "./pages/Insights";
import Events from "./pages/Events";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/:slug" element={<CapabilityDetail />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/industries/cpg-food-beverage" element={<CpgFoodBeverage />} />
          <Route path="/industries/life-sciences" element={<LifeSciences />} />
          <Route path="/industries/life-sciences/pharmaceutical-companies" element={<PharmaceuticalCompanies />} />
          <Route path="/industries/life-sciences/pharmaceutical-companies/global-pharma" element={<GlobalPharma />} />
          <Route path="/industries/life-sciences/pharmaceutical-companies/regional-leaders" element={<RegionalLeaders />} />
          <Route path="/industries/life-sciences/pharmaceutical-companies/biotech" element={<Biotech />} />
          <Route path="/industries/life-sciences/medtech-packaging-delivery-systems" element={<MedtechPackaging />} />
          <Route path="/industries/life-sciences/hospitals-payers" element={<HospitalsPayers />} />
          <Route path="/industries/life-sciences/payers" element={<Payers />} />
          <Route path="/industries/other-industries" element={<OtherIndustries />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;

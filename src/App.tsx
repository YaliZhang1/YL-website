import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TooltipProvider from "./components/ui/TooltipProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import OurServices from "./pages/OurServices";
import Contact from "./pages/Contact";
import IntelligentRobotSystem from "./pages/IntelligentRobotSystem";
import SmartElderlyCare from "./pages/SmartElderlyCare";
import SignIn from "./pages/Login";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemedToaster from "./components/ThemedToaster";

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* Global Toaster: Place it outside the router to ensure it can pop up on any page */}
          <ThemedToaster />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/ourServices" element={<OurServices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/intelligent-robot-system" element={<IntelligentRobotSystem />} />
              <Route path="/smart-elderly-care" element={<SmartElderlyCare />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BeltThemeProvider } from "./contexts/BeltThemeContext";
import { TopBar } from "./components/TopBar";
import Dashboard from "./pages/Dashboard";
import Train from "./pages/Train";
import Knowledge from "./pages/Knowledge";
import PrintGup from "./pages/PrintGup";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BeltThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col w-full">
            <TopBar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/train" element={<Train />} />
                <Route path="/knowledge" element={<Knowledge />} />
                <Route path="/print/gup" element={<PrintGup />} />
                <Route path="/settings" element={<Settings />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </BeltThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

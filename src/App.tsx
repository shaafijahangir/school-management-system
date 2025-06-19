
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalHeader from "./components/GlobalHeader";
import StudentDashboard from "./pages/StudentDashboard";
import CourseHome from "./pages/CourseHome";
import CalendarPage from "./pages/CalendarPage";
import GradesPage from "./pages/GradesPage";
import FeesPage from "./pages/FeesPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <GlobalHeader />
          <Routes>
            <Route path="/" element={<StudentDashboard />} />
            <Route path="/courses/:courseId" element={<CourseHome />} />
            <Route path="/announcements" element={<AnnouncementsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/courses" element={<StudentDashboard />} />
            <Route path="/grades" element={<GradesPage />} />
            <Route path="/fees" element={<FeesPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

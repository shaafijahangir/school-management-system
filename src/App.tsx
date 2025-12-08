import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./lib/contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Layout from "./components/layout/Layout";

// Auth pages
import Login from "./pages/auth/Login";
import RoleSelect from "./pages/auth/RoleSelect";
import MicrosoftCallback from "./pages/auth/MicrosoftCallback";

// Student pages
import StudentDashboard from "./pages/StudentDashboard";
import CourseHome from "./pages/CourseHome";
import CalendarPage from "./pages/CalendarPage";
import GradesPage from "./pages/GradesPage";
import FeesPage from "./pages/FeesPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";

// Teacher pages
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

// Admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";

// Other pages
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/role-select" element={<RoleSelect />} />
            <Route path="/auth/callback" element={<MicrosoftCallback />} />

            {/* Student routes */}
            <Route
              path="/student/dashboard"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Layout>
                    <StudentDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/courses"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Layout>
                    <StudentDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/courses/:id"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Layout>
                    <CourseHome />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/grades"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Layout>
                    <GradesPage />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/calendar"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Layout>
                    <CalendarPage />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/fees"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Layout>
                    <FeesPage />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/student/announcements"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Layout>
                    <AnnouncementsPage />
                  </Layout>
                </ProtectedRoute>
              }
            />

            {/* Teacher routes */}
            <Route
              path="/teacher/dashboard"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <Layout>
                    <TeacherDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher/courses"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <Layout>
                    <TeacherDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />

            {/* Admin routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Layout>
                    <AdminDashboard />
                  </Layout>
                </ProtectedRoute>
              }
            />

            {/* Root redirect */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

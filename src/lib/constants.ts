// Application constants

export const APP_NAME = 'School Management System';
export const APP_VERSION = '1.0.0';

// Routes
export const ROUTES = {
  // Public
  LOGIN: '/login',
  ROLE_SELECT: '/role-select',
  MICROSOFT_CALLBACK: '/auth/callback',
  
  // Student
  STUDENT_DASHBOARD: '/student/dashboard',
  STUDENT_COURSES: '/student/courses',
  STUDENT_COURSE_DETAIL: '/student/courses/:id',
  STUDENT_GRADES: '/student/grades',
  STUDENT_CALENDAR: '/student/calendar',
  STUDENT_FEES: '/student/fees',
  STUDENT_ANNOUNCEMENTS: '/student/announcements',
  
  // Teacher
  TEACHER_DASHBOARD: '/teacher/dashboard',
  TEACHER_COURSES: '/teacher/courses',
  TEACHER_COURSE_MANAGE: '/teacher/courses/:id/manage',
  TEACHER_GRADING: '/teacher/grading',
  TEACHER_ANNOUNCEMENTS: '/teacher/announcements',
  
  // Admin
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_USERS: '/admin/users',
  ADMIN_COURSES: '/admin/courses',
  ADMIN_ENROLLMENTS: '/admin/enrollments',
  ADMIN_REPORTS: '/admin/reports',
} as const;

// Role-based default routes
export const DEFAULT_ROUTES = {
  student: ROUTES.STUDENT_DASHBOARD,
  teacher: ROUTES.TEACHER_DASHBOARD,
  admin: ROUTES.ADMIN_DASHBOARD,
} as const;

// Color palette
export const COLORS = {
  NAVY: '#002855',
  BLUE_ACCENT: '#0066CC',
  BLUE_LIGHT: '#E6F0FF',
  MICROSOFT_BLUE: '#00A4EF',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  GRAY_DARK: '#333333',
  GRAY_MEDIUM: '#666666',
  GRAY_LIGHT: '#999999',
  GRAY_BORDER: '#E5E5E5',
  GRAY_BG: '#F5F5F5',
  SUCCESS: '#00AA00',
  WARNING: '#FFAA00',
  ERROR: '#CC0000',
} as const;

// Course colors (for tiles)
export const COURSE_COLORS = [
  '#0066CC', // Blue
  '#002855', // Navy
  '#4A90E2', // Light Blue
  '#5C6BC0', // Indigo
  '#42A5F5', // Sky Blue
  '#1E88E5', // Ocean Blue
] as const;

// Terms
export const TERMS = ['Fall', 'Spring', 'Summer'] as const;

// Days of week
export const DAYS_OF_WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
] as const;

// Assignment types
export const ASSIGNMENT_TYPES = [
  'homework',
  'quiz',
  'exam',
  'project',
  'discussion',
] as const;

// Grade scale
export const GRADE_SCALE = {
  'A+': { min: 90, max: 100 },
  'A': { min: 85, max: 89 },
  'A-': { min: 80, max: 84 },
  'B+': { min: 77, max: 79 },
  'B': { min: 73, max: 76 },
  'B-': { min: 70, max: 72 },
  'C+': { min: 65, max: 69 },
  'C': { min: 60, max: 64 },
  'C-': { min: 55, max: 59 },
  'D': { min: 50, max: 54 },
  'F': { min: 0, max: 49 },
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100] as const;

// Date formats
export const DATE_FORMAT = 'MMM dd, yyyy';
export const DATE_TIME_FORMAT = 'MMM dd, yyyy h:mm a';
export const TIME_FORMAT = 'h:mm a';

// File upload limits
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
  'image/gif',
] as const;

// Session timeout (in milliseconds)
export const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes


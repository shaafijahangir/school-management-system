// Core type definitions for the School Management System

export type UserRole = 'student' | 'teacher' | 'admin';
export type AuthProvider = 'microsoft' | 'google' | 'demo';
export type CourseStatus = 'active' | 'completed' | 'dropped';
export type AssignmentStatus = 'pending' | 'submitted' | 'graded';
export type EnrollmentStatus = 'enrolled' | 'waitlisted' | 'dropped';

// Tenant/Institution
export interface Tenant {
  id: string;
  name: string;
  domain: string; // e.g., "uvic.ca"
  logo?: string;
  primaryColor: string;
  microsoftTenantId?: string; // Azure AD tenant ID
}

// Base User
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  department?: string;
}

// Authenticated User (with auth provider info)
export interface AuthUser extends User {
  tenantId: string;
  authProvider: AuthProvider;
  microsoftId?: string;
  googleId?: string;
}

// Student-specific
export interface Student extends User {
  role: 'student';
  studentId: string;
  major: string;
  year: number;
  gpa: number;
  creditsEarned: number;
  creditsInProgress: number;
}

// Teacher-specific
export interface Teacher extends User {
  role: 'teacher';
  teacherId: string;
  department: string;
  title: string; // e.g., "Professor", "Associate Professor"
}

// Admin-specific
export interface Admin extends User {
  role: 'admin';
  adminId: string;
  permissions: string[];
}

// Course
export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  credits: number;
  term: string;
  year: number;
  teacherId: string;
  teacherName: string;
  department: string;
  capacity: number;
  enrolled: number;
  schedule: CourseSchedule;
  color: string;
  status: 'active' | 'archived';
}

export interface CourseSchedule {
  days: string[]; // e.g., ["Monday", "Wednesday", "Friday"]
  startTime: string; // e.g., "09:00"
  endTime: string; // e.g., "10:30"
  location: string;
}

// Enrollment
export interface Enrollment {
  id: string;
  studentId: string;
  courseId: string;
  status: EnrollmentStatus;
  enrolledDate: Date;
  grade?: number;
  letterGrade?: string;
}

// Assignment
export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: Date;
  points: number;
  type: 'homework' | 'quiz' | 'exam' | 'project' | 'discussion';
  status: 'draft' | 'published';
}

// Submission
export interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  submittedDate?: Date;
  status: AssignmentStatus;
  fileUrl?: string;
  comments?: string;
}

// Grade
export interface Grade {
  id: string;
  studentId: string;
  assignmentId: string;
  courseId: string;
  score: number;
  maxScore: number;
  percentage: number;
  letterGrade?: string;
  feedback?: string;
  gradedDate?: Date;
  gradedBy?: string;
}

// Announcement
export interface Announcement {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  authorRole: UserRole;
  courseId?: string; // Optional: if announcement is course-specific
  createdDate: Date;
  priority: 'low' | 'medium' | 'high';
  targetAudience: 'all' | 'students' | 'teachers' | 'specific-course';
}

// Calendar Event
export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  type: 'class' | 'assignment' | 'exam' | 'holiday' | 'event';
  courseId?: string;
  location?: string;
  color: string;
}

// Fee/Payment
export interface Fee {
  id: string;
  studentId: string;
  description: string;
  amount: number;
  dueDate: Date;
  paidDate?: Date;
  status: 'pending' | 'paid' | 'overdue';
  type: 'tuition' | 'lab' | 'library' | 'other';
}

// Invoice
export interface Invoice {
  id: string;
  studentId: string;
  term: string;
  year: number;
  items: InvoiceItem[];
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  dueDate: Date;
  status: 'pending' | 'partial' | 'paid';
}

export interface InvoiceItem {
  description: string;
  amount: number;
  type: string;
}

// Resource (course materials)
export interface Resource {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  type: 'pdf' | 'link' | 'video' | 'document';
  url: string;
  uploadedDate: Date;
  uploadedBy: string;
}

// Discussion Forum
export interface Discussion {
  id: string;
  courseId: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  createdDate: Date;
  replies: DiscussionReply[];
  isPinned: boolean;
}

export interface DiscussionReply {
  id: string;
  discussionId: string;
  content: string;
  authorId: string;
  authorName: string;
  createdDate: Date;
}

// Statistics (for dashboards)
export interface SystemStats {
  totalStudents: number;
  totalTeachers: number;
  totalCourses: number;
  totalEnrollments: number;
  activeUsers: number;
}

export interface StudentStats {
  gpa: number;
  creditsEarned: number;
  creditsInProgress: number;
  upcomingAssignments: number;
  coursesEnrolled: number;
}

export interface TeacherStats {
  coursesTeaching: number;
  totalStudents: number;
  pendingGrades: number;
  upcomingClasses: number;
}


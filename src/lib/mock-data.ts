// Comprehensive mock data for the School Management System

import {
  Tenant,
  Student,
  Teacher,
  Admin,
  Course,
  Enrollment,
  Assignment,
  Grade,
  Announcement,
  CalendarEvent,
  Fee,
  Invoice,
  Resource,
  Discussion,
  Submission,
} from './types';
import { COURSE_COLORS } from './constants';

// Tenants
export const mockTenants: Tenant[] = [
  {
    id: 'tenant-1',
    name: 'University of Victoria',
    domain: 'uvic.ca',
    logo: '/placeholder.svg',
    primaryColor: '#002855',
    microsoftTenantId: 'mock-azure-tenant-id-1',
  },
  {
    id: 'tenant-2',
    name: 'Vancouver Island University',
    domain: 'viu.ca',
    logo: '/placeholder.svg',
    primaryColor: '#0066CC',
    microsoftTenantId: 'mock-azure-tenant-id-2',
  },
];

// Students
export const mockStudents: Student[] = [
  {
    id: 'student-1',
    name: 'M Shaafi Jahangir',
    email: 'shaafi@uvic.ca',
    role: 'student',
    studentId: 'V00123456',
    major: 'Computer Science',
    year: 3,
    gpa: 3.85,
    creditsEarned: 75,
    creditsInProgress: 15,
    avatar: '/placeholder.svg',
    phone: '250-123-4567',
    department: 'Engineering and Computer Science',
  },
  {
    id: 'student-2',
    name: 'Emily Chen',
    email: 'emily.chen@uvic.ca',
    role: 'student',
    studentId: 'V00234567',
    major: 'Software Engineering',
    year: 2,
    gpa: 3.92,
    creditsEarned: 45,
    creditsInProgress: 15,
    avatar: '/placeholder.svg',
    department: 'Engineering and Computer Science',
  },
  {
    id: 'student-3',
    name: 'James Wilson',
    email: 'james.wilson@uvic.ca',
    role: 'student',
    studentId: 'V00345678',
    major: 'Computer Science',
    year: 4,
    gpa: 3.67,
    creditsEarned: 105,
    creditsInProgress: 12,
    avatar: '/placeholder.svg',
    department: 'Engineering and Computer Science',
  },
];

// Teachers
export const mockTeachers: Teacher[] = [
  {
    id: 'teacher-1',
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@uvic.ca',
    role: 'teacher',
    teacherId: 'T001',
    department: 'Computer Science',
    title: 'Associate Professor',
    avatar: '/placeholder.svg',
    phone: '250-721-1234',
  },
  {
    id: 'teacher-2',
    name: 'Prof. Michael Brown',
    email: 'michael.brown@uvic.ca',
    role: 'teacher',
    teacherId: 'T002',
    department: 'Software Engineering',
    title: 'Professor',
    avatar: '/placeholder.svg',
    phone: '250-721-2345',
  },
  {
    id: 'teacher-3',
    name: 'Dr. Lisa Anderson',
    email: 'lisa.anderson@uvic.ca',
    role: 'teacher',
    teacherId: 'T003',
    department: 'Computer Science',
    title: 'Assistant Professor',
    avatar: '/placeholder.svg',
    phone: '250-721-3456',
  },
];

// Admins
export const mockAdmins: Admin[] = [
  {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@uvic.ca',
    role: 'admin',
    adminId: 'A001',
    permissions: ['all'],
    avatar: '/placeholder.svg',
    phone: '250-721-0000',
    department: 'Administration',
  },
];

// Courses
export const mockCourses: Course[] = [
  {
    id: 'course-1',
    code: 'CSC 412',
    title: 'Advanced Computer Graphics',
    description: 'Advanced topics in computer graphics including ray tracing, global illumination, and GPU programming.',
    credits: 3,
    term: 'Spring',
    year: 2025,
    teacherId: 'teacher-1',
    teacherName: 'Dr. Sarah Johnson',
    department: 'Computer Science',
    capacity: 40,
    enrolled: 32,
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday'],
      startTime: '09:00',
      endTime: '10:30',
      location: 'ECS 108',
    },
    color: COURSE_COLORS[0],
    status: 'active',
  },
  {
    id: 'course-2',
    code: 'CSC 503',
    title: 'Software Engineering & Design',
    description: 'Principles and practices of software engineering, design patterns, and software architecture.',
    credits: 3,
    term: 'Spring',
    year: 2025,
    teacherId: 'teacher-2',
    teacherName: 'Prof. Michael Brown',
    department: 'Software Engineering',
    capacity: 50,
    enrolled: 45,
    schedule: {
      days: ['Tuesday', 'Thursday'],
      startTime: '13:00',
      endTime: '14:30',
      location: 'ECS 116',
    },
    color: COURSE_COLORS[1],
    status: 'active',
  },
  {
    id: 'course-3',
    code: 'SENG 468',
    title: 'Software Architecture',
    description: 'Design and implementation of large-scale software systems.',
    credits: 3,
    term: 'Spring',
    year: 2025,
    teacherId: 'teacher-2',
    teacherName: 'Prof. Michael Brown',
    department: 'Software Engineering',
    capacity: 35,
    enrolled: 28,
    schedule: {
      days: ['Monday', 'Wednesday'],
      startTime: '14:30',
      endTime: '16:00',
      location: 'ECS 124',
    },
    color: COURSE_COLORS[2],
    status: 'active',
  },
  {
    id: 'course-4',
    code: 'CSC 370',
    title: 'Database Systems',
    description: 'Database design, SQL, transactions, and database management systems.',
    credits: 3,
    term: 'Spring',
    year: 2025,
    teacherId: 'teacher-3',
    teacherName: 'Dr. Lisa Anderson',
    department: 'Computer Science',
    capacity: 60,
    enrolled: 55,
    schedule: {
      days: ['Tuesday', 'Thursday'],
      startTime: '10:00',
      endTime: '11:30',
      location: 'ECS 104',
    },
    color: COURSE_COLORS[3],
    status: 'active',
  },
  {
    id: 'course-5',
    code: 'CSC 320',
    title: 'Foundations of Computer Science',
    description: 'Mathematical foundations including logic, proof techniques, and computational theory.',
    credits: 3,
    term: 'Spring',
    year: 2025,
    teacherId: 'teacher-1',
    teacherName: 'Dr. Sarah Johnson',
    department: 'Computer Science',
    capacity: 45,
    enrolled: 40,
    schedule: {
      days: ['Monday', 'Wednesday', 'Friday'],
      startTime: '11:30',
      endTime: '13:00',
      location: 'ECS 108',
    },
    color: COURSE_COLORS[4],
    status: 'active',
  },
];

// Enrollments
export const mockEnrollments: Enrollment[] = [
  {
    id: 'enroll-1',
    studentId: 'student-1',
    courseId: 'course-1',
    status: 'enrolled',
    enrolledDate: new Date('2025-01-05'),
    grade: 88,
    letterGrade: 'A',
  },
  {
    id: 'enroll-2',
    studentId: 'student-1',
    courseId: 'course-2',
    status: 'enrolled',
    enrolledDate: new Date('2025-01-05'),
    grade: 92,
    letterGrade: 'A+',
  },
  {
    id: 'enroll-3',
    studentId: 'student-1',
    courseId: 'course-3',
    status: 'enrolled',
    enrolledDate: new Date('2025-01-05'),
  },
  {
    id: 'enroll-4',
    studentId: 'student-1',
    courseId: 'course-4',
    status: 'enrolled',
    enrolledDate: new Date('2025-01-05'),
    grade: 85,
    letterGrade: 'A',
  },
  {
    id: 'enroll-5',
    studentId: 'student-1',
    courseId: 'course-5',
    status: 'enrolled',
    enrolledDate: new Date('2025-01-05'),
    grade: 90,
    letterGrade: 'A+',
  },
];

// Assignments
export const mockAssignments: Assignment[] = [
  {
    id: 'assign-1',
    courseId: 'course-1',
    title: 'Ray Tracing Implementation',
    description: 'Implement a basic ray tracer with support for spheres, planes, and lighting.',
    dueDate: new Date('2025-02-15'),
    points: 100,
    type: 'project',
    status: 'published',
  },
  {
    id: 'assign-2',
    courseId: 'course-1',
    title: 'Quiz 1: Graphics Fundamentals',
    description: 'Quiz covering chapters 1-3 of the textbook.',
    dueDate: new Date('2025-01-25'),
    points: 50,
    type: 'quiz',
    status: 'published',
  },
  {
    id: 'assign-3',
    courseId: 'course-2',
    title: 'Design Patterns Assignment',
    description: 'Implement at least 3 design patterns in a sample application.',
    dueDate: new Date('2025-02-10'),
    points: 100,
    type: 'homework',
    status: 'published',
  },
  {
    id: 'assign-4',
    courseId: 'course-2',
    title: 'Midterm Exam',
    description: 'Comprehensive exam covering software design principles.',
    dueDate: new Date('2025-03-01'),
    points: 200,
    type: 'exam',
    status: 'published',
  },
  {
    id: 'assign-5',
    courseId: 'course-3',
    title: 'Architecture Documentation',
    description: 'Create comprehensive architecture documentation for your project.',
    dueDate: new Date('2025-02-20'),
    points: 150,
    type: 'project',
    status: 'published',
  },
  {
    id: 'assign-6',
    courseId: 'course-4',
    title: 'Database Design Project',
    description: 'Design and implement a database for a real-world application.',
    dueDate: new Date('2025-02-28'),
    points: 200,
    type: 'project',
    status: 'published',
  },
];

// Grades
export const mockGrades: Grade[] = [
  {
    id: 'grade-1',
    studentId: 'student-1',
    assignmentId: 'assign-2',
    courseId: 'course-1',
    score: 45,
    maxScore: 50,
    percentage: 90,
    letterGrade: 'A+',
    feedback: 'Excellent work! Clear understanding of the fundamentals.',
    gradedDate: new Date('2025-01-27'),
    gradedBy: 'teacher-1',
  },
  {
    id: 'grade-2',
    studentId: 'student-1',
    assignmentId: 'assign-3',
    courseId: 'course-2',
    score: 92,
    maxScore: 100,
    percentage: 92,
    letterGrade: 'A+',
    feedback: 'Great implementation of design patterns.',
    gradedDate: new Date('2025-02-12'),
    gradedBy: 'teacher-2',
  },
];

// Announcements
export const mockAnnouncements: Announcement[] = [
  {
    id: 'announce-1',
    title: 'PASS drop in Summer hours - connect with a PASS advisor',
    content: 'The PASS program is offering extended drop-in hours this summer. Connect with an advisor for course planning assistance.',
    authorId: 'admin-1',
    authorName: 'Admin User',
    authorRole: 'admin',
    createdDate: new Date('2025-01-20'),
    priority: 'medium',
    targetAudience: 'all',
  },
  {
    id: 'announce-2',
    title: 'Registration planning assistance with PASS',
    content: 'Need help planning your course registration? Book an appointment with PASS advisors.',
    authorId: 'admin-1',
    authorName: 'Admin User',
    authorRole: 'admin',
    createdDate: new Date('2025-01-15'),
    priority: 'high',
    targetAudience: 'students',
  },
  {
    id: 'announce-3',
    title: 'Midterm Exam Schedule Released',
    content: 'The midterm exam schedule has been posted. Please check your course pages for details.',
    authorId: 'teacher-2',
    authorName: 'Prof. Michael Brown',
    authorRole: 'teacher',
    courseId: 'course-2',
    createdDate: new Date('2025-02-01'),
    priority: 'high',
    targetAudience: 'specific-course',
  },
];

// Calendar Events
export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: 'event-1',
    title: 'CSC 412 - Advanced Computer Graphics',
    description: 'Regular class session',
    startDate: new Date('2025-02-10T09:00:00'),
    endDate: new Date('2025-02-10T10:30:00'),
    type: 'class',
    courseId: 'course-1',
    location: 'ECS 108',
    color: COURSE_COLORS[0],
  },
  {
    id: 'event-2',
    title: 'Ray Tracing Implementation Due',
    description: 'Assignment deadline',
    startDate: new Date('2025-02-15T23:59:00'),
    endDate: new Date('2025-02-15T23:59:00'),
    type: 'assignment',
    courseId: 'course-1',
    color: COURSE_COLORS[0],
  },
  {
    id: 'event-3',
    title: 'Midterm Exam - CSC 503',
    description: 'Software Engineering midterm exam',
    startDate: new Date('2025-03-01T13:00:00'),
    endDate: new Date('2025-03-01T15:00:00'),
    type: 'exam',
    courseId: 'course-2',
    location: 'ECS 116',
    color: COURSE_COLORS[1],
  },
];

// Fees
export const mockFees: Fee[] = [
  {
    id: 'fee-1',
    studentId: 'student-1',
    description: 'Tuition - Spring 2025',
    amount: 3250.00,
    dueDate: new Date('2025-02-01'),
    paidDate: new Date('2025-01-15'),
    status: 'paid',
    type: 'tuition',
  },
  {
    id: 'fee-2',
    studentId: 'student-1',
    description: 'Lab Fee - CSC 412',
    amount: 75.00,
    dueDate: new Date('2025-02-01'),
    status: 'pending',
    type: 'lab',
  },
  {
    id: 'fee-3',
    studentId: 'student-1',
    description: 'Library Fee',
    amount: 50.00,
    dueDate: new Date('2025-02-01'),
    paidDate: new Date('2025-01-20'),
    status: 'paid',
    type: 'library',
  },
];

// Invoices
export const mockInvoices: Invoice[] = [
  {
    id: 'invoice-1',
    studentId: 'student-1',
    term: 'Spring',
    year: 2025,
    items: [
      { description: 'Tuition (15 credits)', amount: 3250.00, type: 'tuition' },
      { description: 'Lab Fee - CSC 412', amount: 75.00, type: 'lab' },
      { description: 'Library Fee', amount: 50.00, type: 'library' },
      { description: 'Student Services Fee', amount: 125.00, type: 'other' },
    ],
    totalAmount: 3500.00,
    paidAmount: 3425.00,
    balanceAmount: 75.00,
    dueDate: new Date('2025-02-01'),
    status: 'partial',
  },
];

// Resources
export const mockResources: Resource[] = [
  {
    id: 'resource-1',
    courseId: 'course-1',
    title: 'Course Syllabus',
    description: 'CSC 412 course syllabus and schedule',
    type: 'pdf',
    url: '/resources/csc412-syllabus.pdf',
    uploadedDate: new Date('2025-01-05'),
    uploadedBy: 'teacher-1',
  },
  {
    id: 'resource-2',
    courseId: 'course-1',
    title: 'Lecture 1: Introduction to Ray Tracing',
    description: 'Slides from the first lecture',
    type: 'pdf',
    url: '/resources/lecture1.pdf',
    uploadedDate: new Date('2025-01-10'),
    uploadedBy: 'teacher-1',
  },
  {
    id: 'resource-3',
    courseId: 'course-2',
    title: 'Design Patterns Reference',
    description: 'Quick reference guide for common design patterns',
    type: 'link',
    url: 'https://refactoring.guru/design-patterns',
    uploadedDate: new Date('2025-01-08'),
    uploadedBy: 'teacher-2',
  },
];

// Discussions
export const mockDiscussions: Discussion[] = [
  {
    id: 'discuss-1',
    courseId: 'course-1',
    title: 'Ray Tracing Project Questions',
    content: 'Post your questions about the ray tracing project here.',
    authorId: 'teacher-1',
    authorName: 'Dr. Sarah Johnson',
    createdDate: new Date('2025-01-15'),
    replies: [
      {
        id: 'reply-1',
        discussionId: 'discuss-1',
        content: 'How should we handle reflection calculations?',
        authorId: 'student-2',
        authorName: 'Emily Chen',
        createdDate: new Date('2025-01-16'),
      },
      {
        id: 'reply-2',
        discussionId: 'discuss-1',
        content: 'Use the reflection formula: R = I - 2(N·I)N where I is incident ray and N is surface normal.',
        authorId: 'teacher-1',
        authorName: 'Dr. Sarah Johnson',
        createdDate: new Date('2025-01-16'),
      },
    ],
    isPinned: true,
  },
];

// Submissions
export const mockSubmissions: Submission[] = [
  {
    id: 'submit-1',
    assignmentId: 'assign-2',
    studentId: 'student-1',
    submittedDate: new Date('2025-01-24'),
    status: 'graded',
    fileUrl: '/submissions/student1-quiz1.pdf',
    comments: 'Submitted on time',
  },
  {
    id: 'submit-2',
    assignmentId: 'assign-3',
    studentId: 'student-1',
    submittedDate: new Date('2025-02-09'),
    status: 'graded',
    fileUrl: '/submissions/student1-design-patterns.zip',
    comments: 'Great work!',
  },
  {
    id: 'submit-3',
    assignmentId: 'assign-1',
    studentId: 'student-1',
    status: 'pending',
  },
];

// Helper functions
export const getStudentCourses = (studentId: string): Course[] => {
  const enrollments = mockEnrollments.filter(e => e.studentId === studentId);
  return mockCourses.filter(c => enrollments.some(e => e.courseId === c.id));
};

export const getCourseStudents = (courseId: string): Student[] => {
  const enrollments = mockEnrollments.filter(e => e.courseId === courseId);
  return mockStudents.filter(s => enrollments.some(e => e.studentId === s.id));
};

export const getTeacherCourses = (teacherId: string): Course[] => {
  return mockCourses.filter(c => c.teacherId === teacherId);
};

export const getCourseAssignments = (courseId: string): Assignment[] => {
  return mockAssignments.filter(a => a.courseId === courseId);
};

export const getStudentGrades = (studentId: string): Grade[] => {
  return mockGrades.filter(g => g.studentId === studentId);
};

export const getCourseAnnouncements = (courseId?: string): Announcement[] => {
  if (!courseId) return mockAnnouncements;
  return mockAnnouncements.filter(a => !a.courseId || a.courseId === courseId);
};

export const getStudentFees = (studentId: string): Fee[] => {
  return mockFees.filter(f => f.studentId === studentId);
};

export const getStudentInvoices = (studentId: string): Invoice[] => {
  return mockInvoices.filter(i => i.studentId === studentId);
};

export const getCourseResources = (courseId: string): Resource[] => {
  return mockResources.filter(r => r.courseId === courseId);
};

export const getCourseDiscussions = (courseId: string): Discussion[] => {
  return mockDiscussions.filter(d => d.courseId === courseId);
};

export const getStudentSubmissions = (studentId: string): Submission[] => {
  return mockSubmissions.filter(s => s.studentId === studentId);
};

export const getAssignmentSubmissions = (assignmentId: string): Submission[] => {
  return mockSubmissions.filter(s => s.assignmentId === assignmentId);
};


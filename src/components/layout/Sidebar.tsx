import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/lib/contexts/AuthContext';
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Calendar,
  DollarSign,
  Bell,
  Users,
  Settings,
  BarChart3,
  ClipboardList,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const studentMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/student/dashboard' },
    { icon: BookOpen, label: 'Courses', path: '/student/courses' },
    { icon: GraduationCap, label: 'Grades', path: '/student/grades' },
    { icon: Calendar, label: 'Calendar', path: '/student/calendar' },
    { icon: DollarSign, label: 'Fees', path: '/student/fees' },
    { icon: Bell, label: 'Announcements', path: '/student/announcements' },
  ];

  const teacherMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/teacher/dashboard' },
    { icon: BookOpen, label: 'My Courses', path: '/teacher/courses' },
    { icon: ClipboardList, label: 'Grading', path: '/teacher/grading' },
    { icon: Bell, label: 'Announcements', path: '/teacher/announcements' },
  ];

  const adminMenuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: BookOpen, label: 'Courses', path: '/admin/courses' },
    { icon: FileText, label: 'Enrollments', path: '/admin/enrollments' },
    { icon: BarChart3, label: 'Reports', path: '/admin/reports' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  const menuItems =
    user.role === 'student'
      ? studentMenuItems
      : user.role === 'teacher'
      ? teacherMenuItems
      : adminMenuItems;

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 h-full">
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
                          location.pathname.startsWith(item.path + '/');
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-light text-navy border-l-4 border-blue-accent'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;


import React from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getStudentCourses, mockAssignments, mockCalendarEvents } from '@/lib/mock-data';
import { Student } from '@/lib/types';
import StatCard from '@/components/shared/StatCard';
import TileGrid from '@/features/home/TileGrid';
import RightRail from '@/features/home/RightRail';
import { GraduationCap, BookOpen, Calendar, TrendingUp } from 'lucide-react';

const StudentDashboard = () => {
  const { user } = useAuth();
  const student = user as Student;

  // Get student's courses
  const studentCourses = getStudentCourses(student.id);

  // Get upcoming assignments (next 7 days)
  const now = new Date();
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const upcomingAssignments = mockAssignments.filter(
    (a) => a.dueDate >= now && a.dueDate <= nextWeek
  );

  // Get upcoming events
  const upcomingEvents = mockCalendarEvents.filter(
    (e) => e.startDate >= now && e.startDate <= nextWeek
  );

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, {student.name.split(' ')[0]}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your courses today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Current GPA"
          value={student.gpa.toFixed(2)}
          icon={TrendingUp}
          trend={{ value: 2.5, isPositive: true }}
        />
        <StatCard
          title="Enrolled Courses"
          value={studentCourses.length}
          icon={BookOpen}
        />
        <StatCard
          title="Credits in Progress"
          value={student.creditsInProgress}
          icon={GraduationCap}
        />
        <StatCard
          title="Upcoming Deadlines"
          value={upcomingAssignments.length}
          icon={Calendar}
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Courses Grid */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
            <p className="text-sm text-gray-600">Spring 2025</p>
          </div>
          <TileGrid />
        </div>

        {/* Right Rail */}
        <div className="lg:col-span-1">
          <RightRail />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

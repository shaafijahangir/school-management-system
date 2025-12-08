import React from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { getTeacherCourses, getCourseStudents, mockAssignments } from '@/lib/mock-data';
import { Teacher } from '@/lib/types';
import StatCard from '@/components/shared/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, ClipboardList, Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const teacher = user as Teacher;

  // Get teacher's courses
  const teacherCourses = getTeacherCourses(teacher.id);

  // Calculate total students
  const totalStudents = teacherCourses.reduce((sum, course) => {
    return sum + getCourseStudents(course.id).length;
  }, 0);

  // Get pending grades (assignments without all grades)
  const pendingGrades = mockAssignments.filter(
    (a) => teacherCourses.some((c) => c.id === a.courseId)
  ).length;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome, {teacher.title} {teacher.name.split(' ').slice(-1)[0]}!
        </h1>
        <p className="text-gray-600">
          Here's an overview of your courses and students.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Courses Teaching"
          value={teacherCourses.length}
          icon={BookOpen}
        />
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={Users}
        />
        <StatCard
          title="Pending Grades"
          value={pendingGrades}
          icon={ClipboardList}
        />
        <StatCard
          title="Upcoming Classes"
          value={12}
          icon={Calendar}
        />
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 bg-blue-accent hover:bg-navy flex-col gap-2">
              <Plus className="h-6 w-6" />
              Post Announcement
            </Button>
            <Button className="h-20 bg-navy hover:bg-blue-accent flex-col gap-2">
              <ClipboardList className="h-6 w-6" />
              Grade Assignments
            </Button>
            <Button className="h-20 bg-gray-dark hover:bg-navy flex-col gap-2">
              <Users className="h-6 w-6" />
              View Rosters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* My Courses */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
          <Button variant="outline" asChild>
            <Link to="/teacher/courses">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teacherCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div
                  className="w-full h-32 rounded-md mb-4"
                  style={{ backgroundColor: course.color }}
                />
                <CardTitle className="text-lg">{course.code}</CardTitle>
                <p className="text-sm text-gray-600">{course.title}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Students Enrolled</span>
                    <span className="font-semibold">
                      {course.enrolled}/{course.capacity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Credits</span>
                    <span className="font-semibold">{course.credits}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Schedule</span>
                    <span className="font-semibold text-xs">
                      {course.schedule.days.slice(0, 2).join(', ')}
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link to={`/teacher/courses/${course.id}/manage`}>
                    Manage Course
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;


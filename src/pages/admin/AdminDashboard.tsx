import React from 'react';
import { mockStudents, mockTeachers, mockCourses, mockEnrollments } from '@/lib/mock-data';
import StatCard from '@/components/shared/StatCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, GraduationCap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const totalStudents = mockStudents.length;
  const totalTeachers = mockTeachers.length;
  const totalCourses = mockCourses.filter(c => c.status === 'active').length;
  const totalEnrollments = mockEnrollments.length;

  // Recent activity (mock data)
  const recentActivity = [
    { id: 1, action: 'New student enrolled', details: 'Emily Chen enrolled in CSC 412', time: '10 minutes ago' },
    { id: 2, action: 'Course updated', details: 'CSC 503 capacity increased to 50', time: '1 hour ago' },
    { id: 3, action: 'New teacher added', details: 'Dr. Lisa Anderson joined Computer Science dept', time: '2 hours ago' },
    { id: 4, action: 'Grade submitted', details: 'Prof. Michael Brown submitted grades for SENG 468', time: '3 hours ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          System overview and management tools
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={GraduationCap}
          trend={{ value: 5.2, isPositive: true }}
        />
        <StatCard
          title="Total Teachers"
          value={totalTeachers}
          icon={Users}
        />
        <StatCard
          title="Active Courses"
          value={totalCourses}
          icon={BookOpen}
        />
        <StatCard
          title="Total Enrollments"
          value={totalEnrollments}
          icon={TrendingUp}
          trend={{ value: 12.3, isPositive: true }}
        />
      </div>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-20 bg-blue-accent hover:bg-navy flex-col gap-2" asChild>
              <Link to="/admin/users">
                <Users className="h-6 w-6" />
                Manage Users
              </Link>
            </Button>
            <Button className="h-20 bg-navy hover:bg-blue-accent flex-col gap-2" asChild>
              <Link to="/admin/courses">
                <BookOpen className="h-6 w-6" />
                Manage Courses
              </Link>
            </Button>
            <Button className="h-20 bg-gray-dark hover:bg-navy flex-col gap-2" asChild>
              <Link to="/admin/enrollments">
                <GraduationCap className="h-6 w-6" />
                Manage Enrollments
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                <div className="w-2 h-2 bg-blue-accent rounded-full mt-2" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.details}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enrollment by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Computer Science</span>
                <span className="font-semibold">245</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Software Engineering</span>
                <span className="font-semibold">189</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Engineering</span>
                <span className="font-semibold">312</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Course Capacity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Overall Utilization</span>
                  <span className="font-semibold">82%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-accent h-2 rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-600">Available Seats</span>
                  <span className="font-semibold">45</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;


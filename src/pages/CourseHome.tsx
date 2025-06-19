
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ContentNavigator from '@/features/home/ContentNavigator';
import AnnouncementFeed from '@/features/home/AnnouncementFeed';

const mockCourses = [
  {
    id: '1',
    code: 'CSC 412 512',
    title: 'Advanced Computer Graphics',
    term: 'Spring 2025',
    color: '#0066cc'
  },
  {
    id: '2',
    code: 'CSC 503',
    title: 'Software Engineering & Design',
    term: 'Spring 2025',
    color: '#ff6b35'
  }
];

const CourseHome = () => {
  const { courseId } = useParams();
  const course = mockCourses.find(c => c.id === courseId) || mockCourses[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Courses
          </Link>
        </div>

        {/* Hero Banner */}
        <div 
          className="rounded-lg p-8 mb-8 text-white"
          style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}dd)` }}
        >
          <h1 className="text-3xl font-bold mb-2">{course.code}</h1>
          <p className="text-xl opacity-90">{course.title}</p>
          <p className="text-sm opacity-75">{course.term}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Rail - Content Navigator */}
          <div className="lg:col-span-1">
            <ContentNavigator />
          </div>

          {/* Right Column - Announcements */}
          <div className="lg:col-span-3">
            <AnnouncementFeed />
          </div>
        </div>

        {/* Updates Card - Fixed Bottom Left */}
        <Card className="fixed bottom-6 left-6 w-80 shadow-lg">
          <CardContent className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Course Updates</h3>
            <p className="text-sm text-gray-600">
              Stay tuned for the latest course announcements and materials.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseHome;

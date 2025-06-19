
import React from 'react';
import TileGrid from '@/features/home/TileGrid';
import RightRail from '@/features/home/RightRail';
import CourseSearch from '@/features/home/CourseSearch';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Courses</h1>
          <CourseSearch />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content area */}
          <div className="lg:col-span-3">
            <TileGrid />
          </div>
          
          {/* Right rail */}
          <div className="lg:col-span-1">
            <RightRail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

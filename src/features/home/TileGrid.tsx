
import React from 'react';
import CourseTile from './CourseTile';

const mockCourses = [
  { id: '1', code: 'CSC 412 512', title: 'Advanced Computer Graphics', term: 'Spring 2025', color: '#0066cc' },
  { id: '2', code: 'CSC 503', title: 'Software Engineering & Design', term: 'Spring 2025', color: '#ff6b35' },
  { id: '3', code: 'EDCI 136', title: 'Educational Technology', term: 'Spring 2025', color: '#4ecdc4' },
  { id: '4', code: 'SENG 468', title: 'Software Architecture', term: 'Spring 2024', color: '#45b7d1' },
  { id: '5', code: 'CSC + ENGR', title: 'Co-op Work Term', term: 'Fall 2024', color: '#96ceb4' },
  { id: '6', code: 'TS 300', title: 'Technology & Society', term: 'Spring 2024', color: '#feca57' },
];

const TileGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockCourses.map((course) => (
        <CourseTile key={course.id} {...course} />
      ))}
    </div>
  );
};

export default TileGrid;

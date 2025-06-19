
import React from 'react';
import AnnouncementCard from '@/features/home/AnnouncementCard';

const mockAnnouncements = [
  {
    id: '1',
    title: 'PASS drop in Summer hours - connect with a PASS advisor',
    content: 'PASS (Peer Assisted Study Sessions) will be offering drop-in hours throughout the summer term. Connect with a PASS advisor for academic support and study strategies.',
    date: 'Yesterday at 9:05 AM',
    author: 'Engineering and Computer Science'
  },
  {
    id: '2',
    title: 'Registration planning assistance with PASS',
    content: 'Need help planning your course registration for the upcoming term? PASS advisors are available to help you make informed decisions about your academic path.',
    date: 'May 28 at 4:19 PM',
    author: 'Engineering and Computer Science'
  },
  {
    id: '3',
    title: 'Study Buddy for Summer!',
    content: 'Looking for a study partner this summer? Join our Study Buddy program to connect with fellow students in your courses and build effective study groups.',
    date: 'May 14 at 12:38 PM',
    author: 'Engineering and Computer Science'
  },
  {
    id: '4',
    title: 'Summer Research Opportunities',
    content: 'Several faculty members are looking for undergraduate research assistants for the summer term. This is a great opportunity to gain hands-on research experience.',
    date: 'May 10 at 2:30 PM',
    author: 'Faculty of Engineering'
  },
  {
    id: '5',
    title: 'Library Extended Hours During Exams',
    content: 'The McPherson Library will be extending its hours during the final exam period. Check the library website for the complete schedule.',
    date: 'May 8 at 11:15 AM',
    author: 'UVic Libraries'
  }
];

const AnnouncementsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Announcements</h1>
        
        <div className="max-w-4xl mx-auto">
          {mockAnnouncements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              title={announcement.title}
              content={announcement.content}
              date={announcement.date}
              author={announcement.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsPage;

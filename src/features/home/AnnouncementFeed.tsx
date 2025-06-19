
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnnouncementCard from './AnnouncementCard';

const mockAnnouncements = [
  {
    id: '1',
    title: 'Assignment 3 Due Date Extended',
    content: 'Due to technical difficulties, Assignment 3 deadline has been extended to Friday, March 15th at 11:59 PM.',
    date: 'Mar 10, 2025',
    author: 'Dr. Sarah Johnson'
  },
  {
    id: '2',
    title: 'Midterm Exam Information',
    content: 'The midterm exam will be held in-person on March 20th. Please bring your student ID and calculator.',
    date: 'Mar 8, 2025',
    author: 'Dr. Sarah Johnson'
  },
  {
    id: '3',
    title: 'Guest Lecture Next Week',
    content: 'We will have a special guest lecturer from Google discussing real-world applications of computer graphics.',
    date: 'Mar 5, 2025',
    author: 'Dr. Sarah Johnson'
  }
];

const AnnouncementFeed = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        {mockAnnouncements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            content={announcement.content}
            date={announcement.date}
            author={announcement.author}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default AnnouncementFeed;

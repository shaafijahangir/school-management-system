import React, { useState } from 'react';
import { mockAnnouncements } from '@/lib/mock-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Bell, Pin } from 'lucide-react';

const AnnouncementsPage = () => {
  const [filter, setFilter] = useState<string>('all');

  // Sort announcements by date (newest first)
  const sortedAnnouncements = [...mockAnnouncements].sort(
    (a, b) => b.createdDate.getTime() - a.createdDate.getTime()
  );

  // Filter announcements
  const filteredAnnouncements = sortedAnnouncements.filter((announcement) => {
    if (filter === 'all') return true;
    if (filter === 'high') return announcement.priority === 'high';
    if (filter === 'course') return announcement.targetAudience === 'specific-course';
    return true;
  });

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-destructive text-white">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-warning text-white">Medium</Badge>;
      case 'low':
        return <Badge variant="outline">Low</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Announcements</h1>
          <p className="text-gray-600">Stay updated with the latest news and updates</p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Announcements</SelectItem>
            <SelectItem value="high">High Priority</SelectItem>
            <SelectItem value="course">Course Specific</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Announcements List */}
      <div className="max-w-4xl space-y-4">
        {filteredAnnouncements.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No announcements to display</p>
            </CardContent>
          </Card>
        ) : (
          filteredAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getPriorityBadge(announcement.priority)}
                      {announcement.courseId && (
                        <Badge variant="outline">Course Announcement</Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {announcement.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">{announcement.authorName}</span>
                      <span>•</span>
                      <span>{announcement.createdDate.toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{announcement.createdDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{announcement.content}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default AnnouncementsPage;

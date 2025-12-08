import React, { useState } from 'react';
import { useAuth } from '@/lib/contexts/AuthContext';
import { mockCalendarEvents, mockAssignments, getStudentCourses } from '@/lib/mock-data';
import { Student } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, BookOpen } from 'lucide-react';

const CalendarPage = () => {
  const { user } = useAuth();
  const student = user as Student;
  const [activeTab, setActiveTab] = useState('Week');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // Get student's courses
  const studentCourses = getStudentCourses(student.id);
  const courseIds = studentCourses.map(c => c.id);

  // Filter events for student's courses
  const studentEvents = mockCalendarEvents.filter(
    e => !e.courseId || courseIds.includes(e.courseId)
  );

  // Get upcoming events (next 7 days)
  const now = new Date();
  const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const upcomingEvents = studentEvents
    .filter(e => e.startDate >= now && e.startDate <= nextWeek)
    .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

  // Get upcoming assignments
  const upcomingAssignments = mockAssignments
    .filter(a => courseIds.includes(a.courseId) && a.dueDate >= now && a.dueDate <= nextWeek)
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

  const tabs = ['Week', 'Month', 'List'];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'class':
        return 'bg-blue-accent';
      case 'assignment':
        return 'bg-warning';
      case 'exam':
        return 'bg-destructive';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Calendar</h1>
        <p className="text-gray-600">View your schedule and upcoming events</p>
      </div>

      {/* View Tabs */}
      <div className="flex space-x-1 bg-gray-200 p-1 rounded-md w-fit">
        {tabs.map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "bg-white shadow-sm" : ""}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No upcoming events</p>
              ) : (
                upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-4 p-4 border rounded-md hover:bg-gray-50"
                  >
                    <div className={`w-1 h-full ${getEventTypeColor(event.type)} rounded`} />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{event.title}</h4>
                          {event.description && (
                            <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                          )}
                        </div>
                        <Badge className={getEventTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.startDate.toLocaleDateString()} at{' '}
                          {event.startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Upcoming Assignments */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Assignments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAssignments.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No upcoming assignments</p>
              ) : (
                upcomingAssignments.map((assignment) => {
                  const course = studentCourses.find(c => c.id === assignment.courseId);
                  return (
                    <div
                      key={assignment.id}
                      className="flex items-start gap-4 p-4 border rounded-md hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{course?.code} - {course?.title}</p>
                          </div>
                          <Badge variant="outline">{assignment.points} pts</Badge>
                        </div>
                        <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          Due: {assignment.dueDate.toLocaleDateString()} at{' '}
                          {assignment.dueDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Mini Calendar */}
          <Card>
            <CardContent className="p-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="w-full"
              />
            </CardContent>
          </Card>

          {/* Legend */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Event Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-accent rounded" />
                <span className="text-sm">Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warning rounded" />
                <span className="text-sm">Assignments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive rounded" />
                <span className="text-sm">Exams</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;

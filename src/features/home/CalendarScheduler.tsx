
import React from 'react';

interface CalendarEvent {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  color: string;
  type: 'class' | 'lab' | 'exam';
}

const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'CSC 412 - Lecture',
    startTime: '09:00',
    endTime: '10:30',
    color: '#0066cc',
    type: 'class'
  },
  {
    id: '2',
    title: 'CSC 503 - Lab',
    startTime: '14:00',
    endTime: '16:00',
    color: '#ff6b35',
    type: 'lab'
  }
];

const CalendarScheduler = () => {
  const hours = Array.from({ length: 16 }, (_, i) => i + 8); // 8 AM to 11 PM

  const getEventPosition = (startTime: string, endTime: string) => {
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    
    const startMinutes = (startHour - 8) * 60 + startMin;
    const duration = (endHour - startHour) * 60 + (endMin - startMin);
    
    return {
      top: `${(startMinutes / 60) * 64}px`,
      height: `${(duration / 60) * 64}px`
    };
  };

  return (
    <div className="relative bg-white border rounded-lg overflow-hidden">
      <div className="max-h-96 overflow-y-auto">
        <div className="relative">
          {/* Time slots */}
          {hours.map((hour) => (
            <div key={hour} className="flex border-b border-gray-100">
              <div className="w-16 p-2 text-sm text-gray-500 bg-gray-50 border-r">
                {hour}:00
              </div>
              <div className="flex-1 h-16 relative"></div>
            </div>
          ))}
          
          {/* Events overlay */}
          <div className="absolute inset-0 left-16">
            {mockEvents.map((event) => {
              const position = getEventPosition(event.startTime, event.endTime);
              return (
                <div
                  key={event.id}
                  className="absolute left-2 right-2 rounded p-2 text-white text-sm font-medium shadow-sm"
                  style={{
                    backgroundColor: event.color,
                    top: position.top,
                    height: position.height
                  }}
                >
                  {event.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarScheduler;

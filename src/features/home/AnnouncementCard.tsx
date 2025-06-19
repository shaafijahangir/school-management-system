
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AnnouncementCardProps {
  title: string;
  content: string;
  date: string;
  author: string;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ title, content, date, author }) => {
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <p className="text-sm text-gray-700 mb-2">{content}</p>
        <p className="text-xs text-gray-500">By {author}</p>
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
